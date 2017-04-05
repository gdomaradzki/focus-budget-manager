<template>
  <div class="row">
    <div class="col s12">
      <section class="layout-new-budget-area">
        <h2 class="md-title">new budget</h2>

        <form class="md-new-budget" v-for="budget of budgets">
          <input type="text" class="md-new-budget-description" name="new-budget-description" placeholder="Description" v-model="budget.title">
          <select name="new-budget-clients" class="md-select-client" required>
            <option> {{ budget.client }} </option>
          </select>
          <button class="md-new-budget-btn btn" type="button" @click="createNewBudgetItem()">+</button>
          <md-create-new-budget-item v-for="item of budgets"
                                     :budgetItems="budget.items">
          </md-create-new-budget-item>
          <h4 class="md-budget-total">
            <span class="md-budget-total-bold">total</span>
            $ {{ budget.total_price }}
          </h4>
        </form>
        <div class="layout-send-budget">
          <router-link class="md-return-btn btn" to="/">return</router-link>
          <router-link to="/">
            <button class="md-send-budget-btn btn" @click="updateBudget()">
              update
            </button>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'CurrentBudget',
    data () {
      return {
        budgets: [],
        clientList: []
      }
    },
    beforeCreate: function () {
      Axios.get(`${urlPrefix}/api/budgets/` + this.$route.params.budget).then((res) => {
        let budgets = this.budgets
        budgets.push(res.data)
      })
    },
    created: function () {
      this.getClient()
    },
    mounted: function () {
      setInterval(() => {
        this.calcTotal()
      }, 500)
    },
    methods: {
      getClient: function () {
        Axios.get(`${urlPrefix}/api/clients/` + this.$route.params.client).then((res) => {
          let clients = this.clientList
          clients.push(res.data)
        })
      },
      createNewBudgetItem: function () {
        let budgets = this.budgets[0].items
        let item = {
          itemTitle: '',
          itemQuantity: null,
          itemPrice: null,
          itemSubtotal: 0
        }
        budgets.push(item)
      },
      updateBudget: function () {
        Axios.put(`${urlPrefix}/api/budgets/` + this.$route.params.budget, {
          client: this.budgets[0].client,
          title: this.budgets[0].title,
          total_price: this.budgets[0].total_price,
          items: this.budgets[0].items
        }).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },
      calcTotal: function () {
        let budgets = this.budgets[0].items
        let total = 0
        for (let i in budgets) {
          total += budgets[i].itemSubtotal
          this.budgets[0].total_price = total
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  select {
    display: flex;
  }

  .layout-new-budget-area {
    background-color: $secondary-color;
    padding-bottom: 60px;
    position: relative;
  }

  .layout-send-budget {
    margin: 15px 15px 0;
    display: flex;
    justify-content: space-between;

    .md-return-btn {
      background-color: darken(#f1e46e, 10%);;

      &:hover {
        background-color: #f1e46e;
      }

      &:focus, &:active {
        background-color: darken(#f1e46e, 20%);
      }
    }
  }

  input[type=text] {
    height: 35px;
    border: 1px solid #9e9e9e;
    padding: 0 15px;
    color: $primary-color;

    &:focus {
      border: 1px solid #26a69a;
    }

    @media (max-width: 600px) {
      width: 100%;
      text-align: center;
      justify-content: center;
      margin: 15px 0;
      padding: 0;
    }
  }

  .layout-new-client-area {
    background-color: $secondary-color;
    margin: 30px 0;
    padding: 30px 0;
    position: relative;

    .md-title {
      margin-top: 0;
      padding-top: 0;
    }

    input[type=text] {
      margin: 0 15px;
    }
  }

  .md-new-client-info {
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 0 15px;
    }
  }

  .md-new-client-actions {
    display: flex;
    justify-content: space-between;
    margin: 15px 15px;

    @media (max-width: 600px) {
      flex-direction: column;

      .md-new-client-cancel-btn {
        margin: 15px 0;
      }
    }
  }

  .md-title {
    color: $primary-color;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 15px 15px 0;
  }

  .md-new-budget {
    padding: 0 15px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .md-new-budget-btn {
    font-size: 26px;
    background-color: #2196f3;

    &:hover {
      background-color: #64b5f6;
    }

    &:focus, &:active {
      background-color: #1e88e5;
    }
  }

  .layout-create-new {
    display: flex;
    justify-content: center;
  }

  .md-select-client {
    margin: 0 15px;
    height: 35px;
    width: 50%;
    flex: 1 0 25%;

    @media (max-width: 600px) {
      margin: 15px 0;
      width: 100%;
    }
  }

  .md-new-budget-description {
    height: 35px;
    width: 100%;
    padding: 5px 15px;
    color: $primary-color;
    flex: 1 0 50%;
  }

  .md-budget-total {
    color: $primary-color;
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    margin: 30px 15px;
    align-items: center;
    width: 100%;

    .md-budget-total-bold {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
      margin: 0 15px;
    }

    @media (max-width: 600px) {
      justify-content: center;
    }
  }

  .is-area-hidden {
    transition: .3s ease;
    opacity: 0;
    transform: translateY(-60px);
    position: absolute;
    z-index: -1;
    width: 100%;
  }

  .is-area-visible {
    transition: .5s ease;
    opacity: 1;
    transform: translateY(0);
  }
</style>
