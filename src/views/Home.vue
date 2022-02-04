<template>
  <SearchInputVue v-model:search="search" v-model:filterregion="filterregion" />
  <transition-group
    class="countries__container"
    tag="div"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <template v-if="fetchingData === true">
      <skeletonVue v-for="i in 250" :key="i" />
    </template>

    <CountryComponentVue
      v-else
      v-for="(country, index) in filterCountry"
      :country="country"
      :key="index"
    />
  </transition-group>
  <div v-if="filterCountry.length === 0">No country found</div>
</template>

<script>
import SearchInputVue from "../components/SearchInput.vue";
import CountryComponentVue from "../components/CountryComponent.vue";
import skeletonVue from "../components/skeleton.vue";
import axios from "axios";
import { computed } from "vue";
import gsap from "gsap";

export default {
  name: "Home",
  components: { SearchInputVue, CountryComponentVue, skeletonVue },
  data() {
    return {
      search: "",
      filterregion: "",
      countries: [],
      fetchingData: false,
    };
  },
  provide() {
    return {
      countrydata: computed(() => {
        const uniqueRegions = new Set(
          this.countries.map((country) => country.region)
        );
        const newRegions = Array.from(uniqueRegions).map((region) => region);
        return newRegions;
      }),
    };
  },
  computed: {
    filterCountry() {
      return this.countries
        .filter((country) => country.name.common.includes(this.search))
        .filter((regions) => regions.region.includes(this.filterregion));
    },
  },
  methods: {
    async getAllCountries() {
      try {
        this.fetchingData = true;
        const request = await axios.get("https://restcountries.com/v3.1/all");
        const data = await request.data;
        this.countries = data;

        this.fetchingData = false;
      } catch (error) {
        console.log(error);
        this.fetchingData = false;
      }
    },
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 10;
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        maxHeight: "500px",
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
  },
  mounted() {
    this.getAllCountries();
  },
};
</script>

<style>
.list-move,
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.scale-leave-active {
  position: absolute;
}
.countries__container {
  margin: 0 12px;
}

@media (min-width: 450px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    transition: all 0.2s ease;
  }
}

@media (min-width: 680px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transition: all 0.2s ease;
  }
}

@media (min-width: 980px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 20px;
    transition: all 0.2s ease;
  }
}
</style>
