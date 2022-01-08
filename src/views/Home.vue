<template>
  <SearchInputVue />
  <div class="countries__container"></div>
</template>

<script>
// @ is an alias to /src
import SearchInputVue from "../components/SearchInput.vue";
export default {
  name: "Home",
  components: { SearchInputVue },
};
</script>
