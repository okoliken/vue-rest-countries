<template>
  <SearchInputVue v-model:search="search" v-model:filterregion="filterregion" />
  <div class="countries__container">
    <template v-if="fetchingData === true">
      <skeletonVue v-for="i in 250" :key="i" />
    </template>
    <CountryComponentVue
      v-else
      v-for="(country, index) in filterCountry"
      :country="country"
      :key="index"
    />
  </div>
</template>

<script>
import SearchInputVue from "../components/SearchInput.vue";
import CountryComponentVue from "../components/CountryComponent.vue";
import skeletonVue from "../components/skeleton.vue";
import axios from "axios";
import { computed } from "vue";

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
      countrydata: computed(() =>
        this.countries.map((country) => country.region)
      ),
    };
  },
  computed: {
    filterCountry() {
      return this.countries
        .filter((country) => country.name.common.includes(this.search))
        .filter((region) => region.name.common.includes(this.filterregion));
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
        console.log(data);
      } catch (error) {
        console.log(error);
        this.fetchingData = false;
      }
    },
  },
  mounted() {
    this.getAllCountries();
  },
};
</script>

<style>
.countries__container {
  margin: 0 16px;
}

@media (min-width: 450px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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
