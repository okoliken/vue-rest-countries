<template>
  <SearchInputVue />
  <div class="countries__container">
    <CountryComponentVue />
    <CountryComponentVue />
    <CountryComponentVue />
    <CountryComponentVue />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchInputVue from "../components/SearchInput.vue";
import CountryComponentVue from "../components/CountryComponent.vue";
export default {
  name: "Home",
  components: { SearchInputVue, CountryComponentVue },
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
  }
}

@media (min-width: 680px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 820px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 20px;
  }
}
</style>
