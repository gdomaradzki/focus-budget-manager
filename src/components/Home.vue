<template>
  <div class="row">
    <div class="col s12">
      <main class="layout-main-page">
        <section class="layout-budget-area">
          <h1 class="md-title">Budget Manager</h1>
          <layout-budget-list :budgets="budgets" :clients="clients" :getBudgets="getBudgets" :getChosenClient="getChosenClient" :openBudgetVisualizer="openBudgetVisualizer"></layout-budget-list>
        </section>

        <article class="layout-view-selected-budget" :class="{ 'is-area-hidden': isBudgetHidden, 'is-area-visible': isBudgetVisible }">
          <h3 class="md-budget-client"> {{ chosenClient.client }} </h3>
          <h4 class="md-budget-title"> {{ chosenClient.title}} </h4>
          <h5 class="md-budget-state"> {{ chosenClient.state }} </h5>
          <div class="layout-budget-items" v-for="item of chosenClient.items">
            <span class="md-budget-item-title"> Item: {{ item.itemTitle }} </span>
            <span class="md-budget-item-quantity"> Quantity: {{ item.itemQuantity }} </span>
            <span class="md-budget-item-price"> Price: $ {{ item.itemPrice }} </span>
            <span class="md-budget-item-item-subtotal"> Subtotal: $ {{ item.itemSubtotal }} </span>
          </div>
          <div class="layout-critical-info">
            <button class="md-close-selected-budget-btn btn" @click="closeSelectedBudget()">close</button>
            <h5 class="md-budget-total-price">Total $ {{ chosenClient.total_price }}</h5>
          </div>
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
        chosenClient: {},
        isBudgetHidden: true,
        isBudgetVisible: false
      }
    },
    methods: {
      getChosenClient: function (budget) {
        Axios.get(`${urlPrefix}/api/budgets/` + budget._id).then((res) => {
          this.chosenClient = res.data
        })
      },
      openBudgetVisualizer: function () {
        this.isBudgetHidden = false
        this.isBudgetVisible = true
      },
      closeSelectedBudget: function () {
        this.isBudgetHidden = true
        this.isBudgetVisible = false
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
    color: $primary-color;

    .md-title {
      margin-top: 0;
      padding-top: 0;
    }

    input[type=text] {
      margin: 0 15px;
    }

    .md-budget-client {
      font-size: 26px;

      @media (max-width: 600px) {
        text-align: center;
      }
    }

    .md-budget-title {
      font-size: 22px;
      @media (max-width: 600px) {
        text-align: center;
      }
    }

    .md-budget-state {
      font-size: 16px;
      text-transform: uppercase;
      margin: 30px 0;

      @media (max-width: 600px) {
        text-align: center;
      }
    }

    .layout-budget-items {
      display: flex;
      justify-content: space-between;
      background-color: $secondary-color;
      padding: 0 15px;

      &:first-of-type {
        padding-top: 15px;
      }

      &:last-of-type {
        padding-bottom: 15px;
      }

      @media (max-width: 600px) {
        justify-content: flex-start;
        flex-direction: column;
        margin: 15px 0;
        padding: 15px;

        & > * {
          margin: 10px 0;
        }
      }
    }

    .layout-critical-info {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      @media (max-width: 600px) {
        flex-direction: column;
        .md-close-selected-budget-btn {
          width: 100%;
        }

        .md-budget-total-price {
          text-align: center;
          margin-top: 30px;
        }
      }
    }
  }
</style>
