<template>
  <select class="country-form-select">
    <option selected>Filter by Region</option>
    <option v-for="(item, index) in regions" :key="index" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CheckBox",
  inject: ["countrydata"],
  data() {
    return {
      regions: this.countrydata,
    };
  },
};
</script>

<style lang="scss">
.country-form-select {
  appearance: none;
  outline: none;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 14px 20px;
  height: 53px;
  width: 200px;
  background-color: #fff;
  box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
  border-radius: 4px;
  color: #333335;
  &:focus,
  &:hover {
    outline: none;
    appearance: none;
    background-color: #fff;
  }

  option {
    background-color: #fff;
    outline: none;
    appearance: none;
    border: none;
  }
}
@media (min-width: 480px) {
  .country-form-select {
    height: 58px;
    width: 200px;
  }
}
</style>
