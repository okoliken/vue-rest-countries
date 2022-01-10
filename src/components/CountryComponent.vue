<template>
  <div class="country" v-for="country in countries" :key="country.area">
    <div class="country__flag__con">
      <img :src="country.flags.png" alt="not found" class="country__flag" />
    </div>
    <div class="country__details">
      <p class="country__name">{{ country.name.common }}</p>
      <p class="country__population">Population: <span>10000455</span></p>
      <p class="country__region">Region: <span>10000455</span></p>
      <p class="country__capital">Capital: <span>10000455</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryComponent",
  props: {
    countries: Array,
  },
};
</script>

<style lang="scss">
.country {
  background-color: #fff;
  margin: 15px 7px;
  border-radius: 5px;
  max-height: 500px;
  box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);

  .country__flag__con {
    width: 100%;
    img {
      width: 100%;
      max-width: 380px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
  .country__details {
    padding: 8px;
    .country__name {
      font-weight: bold;
      font-size: 20px;
      margin: 12px 0 20px;
    }
    .country__population {
      margin-bottom: 8px;
      font-weight: 900;
      span {
        font-size: 12px;
        color: #333;
      }
    }
    .country__region {
      margin-bottom: 8px;
      font-weight: 900;
      span {
        font-size: 12px;
        color: #333;
      }
    }
    .country__capital {
      font-weight: 900;
      span {
        font-size: 12px;
        color: #333;
      }
    }
  }
}
@media (min-width: 480px) {
  .country {
    max-width: 500px;
    transition: 0.2s ease;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
</style>
