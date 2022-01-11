<template>
  <SearchInputVue />
  <div class="countries__container">
    <Suspense>
      <template #default>
        <CountryComponentVue />
      </template>
      <template #fallback>
        <skeletonVue v-for="i in 250" :key="i" />
      </template>
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchInputVue from "../components/SearchInput.vue";
import CountryComponentVue from "../components/CountryComponent.vue";
import skeletonVue from "../components/skeleton.vue";

export default {
  name: "Home",
  components: { SearchInputVue, CountryComponentVue, skeletonVue },
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
    transition: display 0.2s ease;
  }
}

@media (min-width: 680px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transition: display 0.2s ease;
  }
}

@media (min-width: 980px) {
  .countries__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 20px;
    transition: display 0.2s ease;
  }
}
</style>
