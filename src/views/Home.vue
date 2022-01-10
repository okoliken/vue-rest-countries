<template>
  <SearchInputVue />
  <div class="countries__container">
    <CountryComponentVue :countries="countries" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchInputVue from "../components/SearchInput.vue";
import CountryComponentVue from "../components/CountryComponent.vue";
import axios from "axios";
export default {
  name: "Home",
  components: { SearchInputVue, CountryComponentVue },
  data() {
    return {
      countries: [],
    };
  },
  methods: {
    async getAllCountry() {
      try {
        const request = await axios.get("https://restcountries.com/v3.1/all");
        const data = await request.data;
        this.countries = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getAllCountry();
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
  }
}

@media (min-width: 680px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 980px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 20px;
  }
}
</style>
