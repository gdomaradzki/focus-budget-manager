<template>
  <div class="layout-budget-list">
    <div class="md-budget-list">
      <div class="md-budget-client"> Client </div>
      <div class="md-budget-state"> Status </div>
      <div class="md-budget-description"> Actions </div>
    </div>
    <div v-for="budget of budgets" class="md-budget-list">
      <div class="md-budget-client">{{ budget.client }}</div>
      <div class="md-budget-state">{{ budget.state }}</div>
      <div class="md-budget-description"> {{ budget.description }}</div>
      <div class="md-budget-action">
        <ul class="layout-budget-action-menu">
          <li class="md-budget-action-item">
            <button type="button" class="md-action-btn btn" @click="getChosenClient(budget); openBudgetVisualizer()">View</button>
          </li>
          <li class="md-budget-action-item">
            <router-link class="md-action-btn btn" :to="{ path: '/edit/' + budget.client + '/' + budget._id }">Edit</router-link>
          </li>
          <li class="md-budget-action-item">
            <button type="button" class="md-action-btn btn" @click="deleteBudget(budget)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'BudgetList',
    data () {
      return {
        client: ''
      }
    },
    props: ['budgets', 'clients', 'getBudgets', 'getChosenClient', 'openBudgetVisualizer'],
    methods: {
      deleteBudget: function (budget) {
        Axios.delete(`${urlPrefix}/api/budgets/` + budget._id, {
          _id: budget._id
        }).then((res) => {
          console.log(res)
          this.getBudgets()
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  .md-budget-list {
    display: flex;
    width: 100%;
    color: $primary-color;

    & > * {
      width: 100%;
      background-color: rgba(0,0,0, .6);
      border: 1px solid #404040;
      padding: 0 15px;
      display: flex;
      height: 35px;
      align-items: center;
    }

    .md-budget-description {
      display: none;
    }

    &:not(:first-of-type) {
      & > * {
        background-color: rgba(55, 255, 236, .61);
        height: 45px;
      }

      .md-budget-description {
        display: none;
      }

      .md-budget-state {
        text-transform: capitalize;
      }

      .md-budget-action {
        display: flex;

        @media (max-width: 600px) {
          height: auto;
        }
      }

      @media (max-width: 800px) {
        flex-direction: column;

        & > * {
          justify-content: center;
          text-align: center;
        }
      }
    }

    &:first-of-type {
      & > * {
        height: 45px;
      }

      .md-budget-description {
        display: flex;
        flex-grow: 1;
      }

      .md-budget-action {
        display: none;
      }
    }

    .md-budget-action {
      display: flex;
      justify-content: center;
    }

    .layout-budget-action-menu {
      display: flex;
      margin: 0;
      justify-content: center;

      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
      }
    }

    .md-budget-action-item {
      margin: 0 9px;

      .btn {
        padding: 0 10px;
      }

      @media (max-width: 600px) {
        margin: 15px;

        .btn {
          width: 100%;
        }
      }
    }
  }
</style>
