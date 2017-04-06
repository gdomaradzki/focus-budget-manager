<template>
  <div class="row">
    <div class="col s12">
      <main class="layout-main-page">
        <section class="layout-budget-area">
          <h1 class="md-title">Budget Manager</h1>
          <layout-budget-list :budgets="budgets" :clients="clients" :getBudgets="getBudgets" :getChosenClient="getChosenClient"></layout-budget-list>
        </section>

        <article class="layout-view-selected-budget" :class="{ 'is-area-hidden': isBudgetHidden, 'is-area-visible': isBudgetVisible }">
          <h4 class="md-budget-title"> {{ chosenClient.title }}</h4>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'Home',
    props: ['budgets', 'clients', 'getBudgets'],
    data () {
      return {
        chosenClient: {}
      }
    },
    mounted: function () {
      setInterval(() => {
        console.log(this.chosenClient)
      }, 1000)
    },
    methods: {
      getChosenClient: function (budget) {
        Axios.get(`${urlPrefix}/api/budgets/` + budget._id).then((res) => {
          this.chosenClient = res.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  .md-title {
    color: $primary-color;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .layout-budget-area {
    padding: 0 15px 60px;
    background-color: $secondary-color;
  }

  .layout-view-selected-budget {
    background-color: $secondary-color;
    margin: 30px 0;
    padding: 30px 15px;
    position: relative;

    .md-title {
      margin-top: 0;
      padding-top: 0;
    }

    input[type=text] {
      margin: 0 15px;
    }
  }
</style>
