<template>
  <div class="country__header">
    <div class="country__header__items">
      <h1>Where in the world?</h1>
      <span>Dark Mode</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.country__header {
  background-color: #fff;
  min-height: 75px;
  padding: 0 20px;
  box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
  .country__header__items {
    display: flex;
    align-items: center;
    padding-top: 28px;
    justify-content: space-between;
    max-width: 100%;
    h1 {
      font-size: 17px;
    }
  }
}
@media (min-width: 480px) {
  .country__header {
    background-color: #fff;
    min-height: 65px;
    padding: 0 20px;
    box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
    -webkit-box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
    -moz-box-shadow: -1px 3px 3px -3px rgba(166, 161, 161, 1);
    .country__header__items {
      display: flex;
      align-items: center;
      padding-top: 20px;
      justify-content: space-between;
      max-width: 100%;
      h1 {
        font-size: 24px;
        font-weight: bold;
      }

      span {
        font-size: 17px;
      }
    }
  }
}
</style>
