<template>
  <header class="l-list-header">
    <div class="md-list-header white--text"
         v-if="headers != null"
         v-for="header in headers">
        {{ header }}
    </div>
  </header>
</template>

<script>
  export default {
    props: ['headers']
  }
</script>

<style lang="scss">
  @import "./../../assets/styles";

  .l-list-header {
    display: none;
    width: 100%;

    @media (min-width: 601px) {
      margin: 25px 0 0;
      display: flex;
    }

    .md-list-header {
      width: 100%;
      background-color: $background-color;
      border: 1px solid $border-color-input;
      padding: 0 15px;
      display: flex;
      height: 45px;
      align-items: center;
      justify-content: center;
      font-size: 22px;

      @media (min-width: 601px) {
        justify-content: flex-start;
      }
    }
  }
</style>
