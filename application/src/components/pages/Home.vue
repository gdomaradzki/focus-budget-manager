<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Focus Budget Manager
      </h4>

      <budget-list>
        <budget-list-header slot="budget-list-header"></budget-list-header>
        <budget-list-body slot="budget-list-body"></budget-list-body>
      </budget-list>
    </div>
  </main>
</template>

<script>
  import BudgetListHeader from './../Budget/BudgetListHeader'
  import BudgetListBody from './../Budget/BudgetListBody'
  export default {
    components: {
      'budget-list-header': BudgetListHeader,
      'budget-list-body': BudgetListBody
    },
    data () {
      return {
        users: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../../assets/styles";

  .l-home {
    background-color: $background-color;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
  }
</style>
