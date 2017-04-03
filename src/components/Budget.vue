<template>
  <div class="row">
    <div class="col s12">
      <section class="layout-new-budget-area">
        <h2 class="md-title">new budget</h2>

        <div class="layout-create-new">
          <button class="md-create-budget-btn btn" @click="newBudgetArea();">
            Create New
          </button>
        </div>

        <form class="md-new-budget" :class="{ 'is-area-hidden': isBudgetHidden, 'is-area-visible': isBudgetVisible }">
          <input type="text" class="md-new-budget-description" placeholder="Description" v-model="budgets[0].title">
          <select class="md-select-client" required v-model="budgets[0].client">
            <option disabled hidden value="">Choose a Client</option>
            <option value="new-client">New Client</option>
            <option v-for="client of clientList"> {{ client.client_name }} </option>
          </select>
          <button class="md-new-budget-btn btn" type="button" @click="createNewBudgetItem()">+</button>
          <md-create-new-budget-item v-for="item of budgets"
                                     :budgetItems="budgets[0].items">
          </md-create-new-budget-item>
        </form>
        <h4 class="md-budget-total">
          <span class="md-budget-total-bold">total</span>
          $ {{ budgets[0].totalPrice }}
        </h4>
      </section>

      <article class="layout-new-client-area" :class="{ 'is-area-hidden': isNewClientHidden, 'is-area-visible': isNewClientVisible }">
        <h5 class="md-title">register client</h5>
        <div class="md-new-client-info">
          <input type="text" name="new-client-name" v-model="newClient.name" placeholder="Client's name">
          <input type="text" name="new-client-email" v-model="newClient.email" placeholder="Client's email">
        </div>

        <div class="md-new-client-actions">
          <button class="md-new-client-cancel-btn btn"
                  type="button"
                  name="new-client-cancel-btn"
                  @click="closeNewClientArea ()">
                  Cancel
          </button>
          <button class="md-new-client-submit-btn btn"
                  type="submit"
                  name="new-client-submit-btn"
                  @click="postNewClient (); getAllClients()">
                  Save client
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'Budget',
    data () {
      return {
        clients: '',
        clientList: [],
        budgets: [],
        newClient: {
          name: '',
          email: ''
        },
        isBudgetHidden: true,
        isBudgetVisible: false,
        isNewClientHidden: true,
        isNewClientVisible: false
      }
    },
    watch: {
      'clients': function (value) {
        if (value === 'new-client') {
          this.isNewClientHidden = !this.isNewClientHidden
          this.isNewClientVisible = !this.isNewClientVisible
        } else {
          this.isNewClientHidden = true
          this.isNewClientVisible = false
        }
      }
    },
    created: function () {
      this.createNewBudget()
    },
    mounted: function () {
      this.getAllClients()
      setInterval(() => {
        this.calcTotal()
      }, 1000)
    },
    methods: {
      getAllClients: function () {
        Axios.get(`${urlPrefix}/api/clients`).then((res) => {
          for (let i in res.data) {
            let clientList = this.clientList
            clientList.push(res.data[i])
          }
        })
      },
      createNewBudget: function () {
        let budgets = this.budgets
        let budget = {
          client: '',
          description: '',
          state: '',
          title: '',
          totalPrice: 0,
          items: []
        }
        budgets.push(budget)
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
      closeNewClientArea: function () {
        this.isNewClientHidden = !this.isNewClientHidden
        this.isNewClientVisible = !this.isNewClientVisible
      },
      newBudgetArea: function () {
        this.isBudgetHidden = false
        this.isBudgetVisible = true
      },
      postNewClient: function () {
        Axios.post(`${urlPrefix}/api/clients`, {
          client_name: this.newClient.name,
          client_email: this.newClient.email
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
          this.budgets[0].totalPrice = total
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

  input[type=text] {
    // margin: 0 15px;
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
