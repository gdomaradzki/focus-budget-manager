<template>
  <div id="app">
    <div class="container">
      <layout-header :getBudgetsFromStatus="getBudgetsFromStatus" ref="header"></layout-header>
      <router-view :budgets="budgets" :clients="clients" :getBudgets="getBudgets"></router-view>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'app',
    data () {
      return {
        budgets: [],
        clients: []
      }
    },
    created: function () {
      this.getBudgets()
      this.getClients()
    },
    methods: {
      getBudgets () {
        Axios.get(`${urlPrefix}/api/budgets`).then((res) => {
          this.budgets = []
          for (let i in res.data) {
            let budgets = this.budgets
            budgets.push(res.data[i])
          }
        })
      },
      getClients: function () {
        Axios.get(`${urlPrefix}/api/clients`).then((res) => {
          for (let i in res.data) {
            let clients = this.clients
            clients.push(res.data[i])
          }
        })
      },
      getBudgetsFromStatus: function (link) {
        Axios.get(`${urlPrefix}/api/budgets/status/` + link.value).then((res) => {
          this.budgets = []
          for (let i in res.data) {
            let budgets = this.budgets
            budgets.push(res.data[i])
          }

          if (link.value === 'all') {
            this.getBudgets()
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  $background-color: #1734c1;

  // Override Materialize Default
  .container {
    margin-top: 15px !important;
    position: relative;
    .row {
      margin-bottom: 0;
    }
  }

  body {
    background: url('https://chrismartinphotography.files.wordpress.com/2013/01/2012-landscapes-c2a9-christopher-martin-93441.jpg') no-repeat center center fixed;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $background-color;
      opacity: .3;
      z-index: -1;
    }
  }

  @media screen and (max-width: 992px) {
    .md-flex-disperser {
      width: 100% !important;
    }
  }

  // States
  .is-hidden {
    transition: .5s ease;
    max-height: 0;
  }

  .is-collapsed {
    transition: 3s ease;
    max-height: 3000px;
  }
</style>
