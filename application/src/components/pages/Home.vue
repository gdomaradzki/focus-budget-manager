<template>
  <main class="l-home-page">
    <app-header></app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Focus Budget Manager
      </h4>

      <list>
        <list-header slot="list-header" :headers="budgetHeaders"></list-header>
        <list-body slot="list-body" :data="budgets"></list-body>
      </list>
    </div>

    <v-snackbar :timeout="timeout"
                bottom="bottom"
                color="red lighten-1"
                v-model="snackbar">
      {{ message }}
    </v-snackbar>
  </main>
</template>

<script>
  import Axios from 'axios'
  import Authentication from '@/components/pages/Authentication'
  import ListHeader from './../List/ListHeader'
  import ListBody from './../List/ListBody'

  const BudgetManagerAPI = `http://${window.location.hostname}:3001`

  export default {
    components: {
      'list-header': ListHeader,
      'list-body': ListBody
    },
    data () {
      return {
        budgets: [],
        budgetHeaders: ['Client', 'Title', 'Status', 'Actions'],
        snackbar: false,
        timeout: 6000,
        message: ''
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
        }).then(({data}) => {
          this.dataParser(data, '_id', 'client', 'title', 'state')
        }).catch(error => {
          this.snackbar = true
          this.message = error.message
        })
      },

      dataParser (targetedArray, ...options) {
        targetedArray.forEach(item => {
          let parsed = {}
          options.forEach(option => (parsed[option] = item[option]))
          this.budgets.push(parsed)
        })
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
