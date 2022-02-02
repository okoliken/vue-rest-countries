<template>
  <div class="flex-country-input">
    <div class="country__search_con">
      <input
        type="text"
        @input="$emit('update:search', $event.target.value)"
        class="country__search__input"
        placeholder="Search for a country..."
        :value="search"
      />
      <img src="../assets/search.png" alt="" class="country__search__icon" />
    </div>
    <CheckBoxVue @input="$emit('update:filterregion', $event.target.value)" />
  </div>
</template>

<script>
import CheckBoxVue from "./CheckBox.vue";

export default {
  name: "SearchInput",
  components: {
    CheckBoxVue,
  },
  props: {
    search: String,
    filterregion: String,
  },
  emits: ["update:search", "update:filterregion"],
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
    margin: 27px 20px;
    height: 52px;
    background-color: #fff;
    box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
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
      margin: 45px 20px;
      height: 58px;
      width: 440px;
      overflow: hidden;
      .country__search__input {
        transform: translateX(55px);
      }
      .country__search__icon {
        position: absolute;
        height: 24px;
        transform: translateX(23px);
      }
    }
  }
}
</style>
