<template>
  <div class="country">
    <div class="country__flag__con">
      <div class="country__flag"></div>
    </div>
    <div class="country__details">
      <p class="country__name"></p>
      <p class="country__population"><span></span></p>
      <p class="country__region"><span></span></p>
      <p class="country__capital"><span></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "skeleton",
};
</script>
<style lang="scss" scoped>
.country {
  background-color: #fff;
  margin: 15px 7px;
  border-radius: 5px;
  max-height: 500px;
  box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
  margin-bottom: 10px;
  .country__flag__con {
    width: 100%;
    div {
      width: 100%;
      height: 100px;
      border: none;
      max-width: 380px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      animation: pluse 1s infinite linear;
    }
  }
  .country__details {
    padding: 8px;
    .country__name {
      margin: 12px 0 20px;
      width: 100%;
      animation: pluse 1s infinite linear;
      height: 16px;
    }
    .country__population {
      margin-bottom: 8px;
      width: 100%;
      animation: pluse 1s infinite linear;
      height: 16px;
    }
    .country__region {
      width: 100%;
      animation: pluse 1s infinite linear;
      height: 16px;
    }
    .country__capital {
      width: 100%;
      animation: pluse 1s infinite linear;
      height: 16px;
    }
  }
}
@keyframes pluse {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #eee;
  }
}
</style>
