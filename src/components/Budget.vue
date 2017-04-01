<template>
  <div class="row">
    <div class="col s12">
      <section class="layout-new-budget-area">
        <h2 class="md-title">novo orçamento</h2>
        <div class="md-new-budget">
          <textarea class="md-new-budget-description" name="budget-description" placeholder="Descrição"></textarea>
          <select class="md-select-client" v-model="clientList" required>
            <option disabled hidden value="">Cliente</option>
            <option value="new-client">Novo Cliente</option>
            <option v-for="client of clients"> {{ client.client_name }} </option>
          </select>
          <button class="md-new-budget-btn btn blue lighten-2" type="button" @click="createNewBudgetItem ()">+</button>
        </div>
        <md-create-new-budget-item :budgetItems="budgetItemsList.items"></md-create-new-budget-item>
        <h4 class="md-budget-total">
          <span class="md-budget-total-bold">total</span>
          R$ {{ totalPrice }}
        </h4>
      </section>
      <article class="layout-new-client-area" v-bind:class="{ 'is-area-hidden': isHidden, 'is-area-visible': isVisible }">
        <div class="md-new-client-info">
          <input type="text" name="new-client-name" v-model="newClient.name" placeholder="Nome do Cliente">
          <input type="text" name="new-client-email" v-model="newClient.email" placeholder="E-mail">
        </div>
        <div class="md-new-client-actions">
          <button class="md-new-client-cancel-btn btn red lighten-2" type="button" name="new-client-cancel-btn"
                  @click="closeNewClient ()">Cancelar</button>
          <button class="md-new-client-submit-btn btn" type="submit" name="new-client-submit-btn" @click="postNewClient ()">Salvar Cliente</button>
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
        clientList: '',
        clients: [],
        totalPrice: '',
        isHidden: true,
        isVisible: false,
        newClient: {
          name: '',
          email: ''
        },
        budgetItemsList: {
          itemsList: {
            items: []
          }
        }
      }
    },
    watch: {
      'clientList': function (value) {
        if (value === 'new-client') {
          this.isHidden = !this.isHidden
          this.isVisible = !this.isVisible
        }
      }
    },
    mounted: function () {
      this.getBudgetItems()
      this.getAllClients()
    },
    methods: {
      getBudgetItems () {
        Axios.get(`${urlPrefix}/api/budgets`).then((res) => {
          for (let i in res.data) {
            let budgetsItems = this.budgetItemsList.itemsList.items
            budgetsItems.push(res.data[i])
            console.log(budgetsItems)
          }
        })
      },

      postNewBudget () {
        Axios.post(`${urlPrefix}/api/budgets`, {
          client: this.budgetList.itemsList.client,
          state: this.budgetList.itemsList.state,
          title: this.budgetList.itemsList.title,
          items: this.budgetList.itemsList.items
        }).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },

      postNewClient () {
        Axios.post(`${urlPrefix}/api/clients`, {
          client_name: this.newClient.name,
          client_email: this.newClient.email
        }).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      },

      getAllClients () {
        Axios.get(`${urlPrefix}/api/clients`).then((res) => {
          for (let i in res.data) {
            let clients = this.clients
            clients.push(res.data[i])
          }
        })
      },

      closeNewClient () {
        this.isHidden = !this.isHidden
        this.isVisible = !this.isVisible
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
  }

  .layout-new-client-area {
    background-color: $secondary-color;
    margin: 30px 0;
    padding: 30px 0;

    input[type=text] {
      margin: 0 15px;
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
  }

  .md-new-budget {
    padding: 0 15px;
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .md-new-budget-btn {
    font-size: 26px;
  }

  .md-select-client {
    margin: 0 15px;
    height: 35px;
    width: 50%;

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
  }

  .is-area-visible {
    transition: .5s ease;
    opacity: 1;
    transform: translateY(0);
  }
</style>
