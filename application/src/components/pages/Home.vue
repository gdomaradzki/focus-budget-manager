<template>
  <main class="l-home-page">
    <app-header :budgetsVisible="budgetsVisible"
      @toggleVisibleData="budgetsVisible = !budgetsVisible; budgetCreation = !budgetCreation"
      :selectState="selectState"
      :search="search"
      v-model="search">
    </app-header>

    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">
        Focus Budget Manager
      </h4>

      <list v-if="listPage">
        <list-header slot="list-header" :headers="budgetsVisible ? budgetHeaders : clientHeaders"></list-header>
        <list-body slot="list-body"
                   :budgetsVisible="budgetsVisible"
                   :data="budgetsVisible ? budgets : clients"
                   :search="search"
                   :deleteItem="deleteItem"
                   :getBudget="getBudget"
                   :getClient="getClient"
                   :parsedBudgets="parsedBudgets">
        </list-body>
      </list>

      <create v-else-if="createPage"
        :budgetCreation="budgetCreation"
        :budgetEdit="budgetEdit"
        :editPage="editPage"
        :clients="clients"
        :budget="budget"
        :client="client"
        :saveBudget="saveBudget"
        :saveClient="saveClient"
        :fixClientNameAndUpdate="fixClientNameAndUpdate"
        :updateClient="updateClient">
      </create>
    </div>

    <v-snackbar :timeout="timeout"
                bottom="bottom"
                :color="snackColor"
                v-model="snackbar">
      {{ message }}
    </v-snackbar>

    <v-fab-transition>
      <v-speed-dial v-model="fab"
                    bottom
                    right
                    fixed
                    direction="top"
                    transition="scale-transition">
          <v-btn slot="activator"
                 color="red lighten-1"
                 dark
                 fab
                 v-model="fab">
                <v-icon>add</v-icon>
                <v-icon>close</v-icon>
          </v-btn>

          <v-tooltip left>
            <v-btn color="light-blue lighten-1"
                   dark
                   small
                   fab
                   slot="activator"
                   @click.native="budgetCreation = true; listPage = false; editPage = false; createPage = true">
                  <v-icon>assignment</v-icon>
            </v-btn>
            <span>Add new Budget</span>
          </v-tooltip>

          <v-tooltip left>
            <v-btn color="green lighten-1"
                   dark
                   small
                   fab
                   slot="activator"
                   @click.native="budgetCreation = false; listPage = false; editPage = false; createPage = true">
                  <v-icon>account_circle</v-icon>
            </v-btn>
            <span>Add new Client</span>
          </v-tooltip>

          <v-tooltip left>
            <v-btn color="purple lighten-2"
                   dark
                   small
                   fab
                   slot="activator"
                   @click.native="budgetCreation = false; listPage = true; budgetsVisible = true">
                  <v-icon>assessment</v-icon>
            </v-btn>
            <span>List Budgets</span>
          </v-tooltip>

          <v-tooltip left>
            <v-btn color="deep-orange lighten-2"
                   dark
                   small
                   fab
                   slot="activator"
                   @click.native="budgetCreation = false; listPage = true; budgetsVisible = false;">
                  <v-icon>supervisor_account</v-icon>
            </v-btn>
            <span>List Clients</span>
          </v-tooltip>
      </v-speed-dial>
    </v-fab-transition>
  </main>
</template>

<script>
  import Axios from 'axios'
  import Authentication from '@/components/pages/Authentication'
  import ListHeader from './../List/ListHeader'
  import ListBody from './../List/ListBody'

  const BudgetManagerAPI = 'https://focus-budget-manager-api.herokuapp.com'

  export default {
    components: {
      'list-header': ListHeader,
      'list-body': ListBody
    },
    data () {
      return {
        parsedBudgets: null,
        budget: null,
        client: null,
        state: null,
        search: null,
        budgets: [],
        clients: [],
        budgetHeaders: ['Client', 'Title', 'Status', 'Actions'],
        clientHeaders: ['Client', 'Email', 'Phone', 'Actions'],
        budgetsVisible: true,
        snackbar: false,
        timeout: 6000,
        message: '',
        fab: false,
        listPage: true,
        createPage: false,
        editPage: false,
        budgetCreation: true,
        budgetEdit: true,
        snackColor: 'red lighten-1'
      }
    },
    mounted () {
      this.getAllBudgets()
      this.getAllClients()
      this.hidden = false
    },
    watch: {
      'search': function () {
        if (this.search !== null || this.search !== '') {
          const searchTerm = this.search
          const regex = new RegExp(`^(${searchTerm})`, 'g')
          const results = this.budgets.filter(budget => budget.client.match(regex))
          this.parsedBudgets = results
        } else {
          this.parsedBudgets = null
        }
      }
    },
    methods: {
      getAllBudgets () {
        Axios.get(`${BudgetManagerAPI}/api/v1/budget`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        }).then(({data}) => {
          this.budgets = this.dataParser(data, '_id', 'client', 'title', 'state', 'client_id')
        }).catch(error => {
          this.errorHandler(error)
        })
      },

      getAllClients () {
        Axios.get(`${BudgetManagerAPI}/api/v1/client`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        }).then(({data}) => {
          this.clients = this.dataParser(data, 'name', 'email', '_id', 'phone')
        }).catch(error => {
          this.errorHandler(error)
        })
      },

      getBudget (budget) {
        Axios.get(`${BudgetManagerAPI}/api/v1/budget/single`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: {
            user_id: this.$cookie.get('user_id'),
            _id: budget._id
          }
        }).then(({data}) => {
          this.budget = data
          this.enableEdit('budget')
        }).catch(error => {
          this.errorHandler(error)
        })
      },

      getClient (client) {
        Axios.get(`${BudgetManagerAPI}/api/v1/client/single`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: {
            user_id: this.$cookie.get('user_id'),
            _id: client._id
          }
        }).then(({data}) => {
          this.client = data
          this.enableEdit('client')
        }).catch(error => {
          this.errorHandler(error)
        })
      },

      enableEdit (type) {
        if (type === 'budget') {
          this.listPage = false
          this.budgetEdit = true
          this.budgetCreation = false
          this.editPage = true
        } else if (type === 'client') {
          this.listPage = false
          this.budgetEdit = false
          this.budgetCreation = false
          this.editPage = true
        }
      },

      saveBudget (budget) {
        Axios.post(`${BudgetManagerAPI}/api/v1/budget`, budget, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        })
        .then(res => {
          this.resetFields(budget)
          this.snackbar = true
          this.message = res.data.message
          this.snackColor = 'green lighten-1'
          this.getAllBudgets()
        })
        .catch(error => {
          this.errorHandler(error)
        })
      },

      fixClientNameAndUpdate (budget) {
        this.clients.find(client => {
          if (client._id === budget.client_id) {
            budget.client = client.name
          }
        })

        this.updateBudget(budget)
      },

      updateBudget (budget) {
        Axios.put(`${BudgetManagerAPI}/api/v1/budget/single`, budget, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        })
        .then(() => {
          this.snackbar = true
          this.message = 'Budget updated'
          this.snackColor = 'green lighten-1'
          this.listPage = true
          this.budgetCreation = false
          this.budgetsVisible = true
          this.getAllBudgets()
        })
        .catch(error => {
          this.errorHandler(error)
        })
      },

      updateClient (client) {
        Axios.put(`${BudgetManagerAPI}/api/v1/client/single`, client, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        })
        .then(() => {
          this.snackbar = true
          this.message = 'Client updated'
          this.snackColor = 'green lighten-1'
          this.listPage = true
          this.budgetCreation = false
          this.budgetsVisible = false
          this.getAllClients()
        })
        .catch(error => {
          this.errorHandler(error)
        })
      },

      saveClient (client) {
        Axios.post(`${BudgetManagerAPI}/api/v1/client`, client, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id') }
        })
        .then(res => {
          this.resetFields(client)
          this.snackbar = true
          this.message = res.data.message
          this.snackColor = 'green lighten-1'
          this.getAllClients()
        })
        .catch(error => {
          this.errorHandler(error)
        })
      },

      deleteItem (selected, items, api) {
        let targetApi = ''
        api ? targetApi = 'budget' : targetApi = 'client'
        Axios.delete(`${BudgetManagerAPI}/api/v1/${targetApi}`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: {
            user_id: this.$cookie.get('user_id'),
            _id: selected._id
          }
        })
        .then(() => {
          this.removeItem(selected, items)
        })
        .then(() => {
          api ? this.getAllBudgets() : this.getAllClients()
        })
        .catch(error => {
          this.errorHandler(error)
        })
      },

      errorHandler (error) {
        const status = error.response.status
        this.snackbar = true
        this.snackColor = 'red lighten-1'
        if (status === 404) {
          this.message = 'Invalid request'
        } else if (status === 401 || status === 403) {
          this.message = 'Unauthorized'
        } else if (status === 400) {
          this.message = 'Invalid or missing information'
        } else {
          this.message = error.message
        }
      },

      removeItem (selected, items) {
        items.forEach((item, index) => {
          if (item === selected) {
            items.splice(index, 1)
          }
        })
      },

      dataParser (targetedArray, ...options) {
        let parsedData = []
        targetedArray.forEach(item => {
          let parsedItem = {}
          options.forEach(option => (parsedItem[option] = item[option]))
          parsedData.push(parsedItem)
        })
        return parsedData
      },

      resetFields (item) {
        for (let key in item) {
          item[key] = null

          if (key === 'quantity' || key === 'price') {
            item[key] = 0
          }

          item['items'] = []
        }
      },

      selectState (state) {
        this.state = state
        state === 'all' ? this.getAllBudgets() : this.getBudgetsByState(state)
      },

      getBudgetsByState (state) {
        Axios.get(`${BudgetManagerAPI}/api/v1/budget/state`, {
          headers: { 'Authorization': Authentication.getAuthenticationHeader(this) },
          params: { user_id: this.$cookie.get('user_id'), state }
        }).then(({data}) => {
          this.budgets = this.dataParser(data, '_id', 'client', 'title', 'state', 'client_id')
        }).catch(error => {
          this.errorHandler(error)
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/styles";

  .l-home {
    background-color: $background-color;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
  }

  .snack__content {
    justify-content: center !important;
  }
</style>
