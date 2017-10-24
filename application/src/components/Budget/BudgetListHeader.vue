<template>
  <header class="l-budget-header">
    <div class="md-budget-header white--text">Client</div>
    <div class="md-budget-header white--text">Title</div>
    <div class="md-budget-header white--text">Status</div>
    <div class="md-budget-header white--text">Actions</div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import "./../../assets/styles";

  .l-budget-header {
    display: none;
    width: 100%;

    @media (min-width: 601px) {
      margin: 25px 0 0;
      display: flex;
    }

    .md-budget-header {
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
