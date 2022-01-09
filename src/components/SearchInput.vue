<template>
  <div class="flex-country-input">
    <div class="country__search_con">
      <input
        type="search"
        name=""
        id=""
        class="country__search__input"
        placeholder="Search for a country..."
      />
      <img src="../assets/search.png" alt="" class="country__search__icon" />
    </div>
    <CheckBoxVue />
  </div>
</template>

<script>
import CheckBoxVue from "./CheckBox.vue";

export default {
  name: "SearchInput",
  components: {
    CheckBoxVue,
  },
};
</script>

<style lang="scss">
.flex-country-input {
  display: flex;
  flex-direction: column;
  .country__search_con {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 20px;
    height: 55px;
    background-color: #fff;
    box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
    -webkit-box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
    -moz-box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
    border-radius: 4px;
    .country__search__input {
      appearance: none;
      outline: none;
      border: none;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      transform: translateX(40px);
      &::placeholder {
        color: lightgray;
        font-weight: 400;
      }
    }
    .country__search__icon {
      position: absolute;
      height: 20px;
      transform: translateX(20px);
    }
  }
}
@media (min-width: 490px) {
  .flex-country-input {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    .country__search_con {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 30px 20px;
      height: 50px;
      width: 400px;
      overflow: hidden;
      .country__search__icon {
        position: absolute;
        height: 18px;
        transform: translateX(20px);
      }
    }
  }
}
</style>
