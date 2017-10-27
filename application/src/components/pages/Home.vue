<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Focus Budget Manager
      </h4>

      <budget-list>
        <budget-list-header slot="budget-list-header"></budget-list-header>
        <budget-list-body slot="budget-list-body" :budgets="budgets"></budget-list-body>
      </budget-list>
    </div>
  </main>
</template>

<script>
  import Axios from 'axios'
  import Authentication from '@/components/pages/Authentication'
  import BudgetListHeader from './../Budget/BudgetListHeader'
  import BudgetListBody from './../Budget/BudgetListBody'

  const BudgetManagerAPI = `http://${window.location.hostname}:3001`

  export default {
    components: {
      'budget-list-header': BudgetListHeader,
      'budget-list-body': BudgetListBody
    },
    data () {
      return {
        budgets: []
      }
    },
    mounted () {
      this.getAllBudgets()
    },
    methods: {
      getAllBudgets () {
        Axios.get(`${BudgetManagerAPI}/api/v1/budget`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        }).then(({data}) => (this.budgets = data))
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
