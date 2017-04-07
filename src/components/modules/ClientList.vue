<template>
  <div class="layout-client-list">
    <div class="md-client-list">
      <div class="md-client-client"> Client </div>
      <div class="md-client-state"> Email </div>
      <!-- <div class="md-client-description"> Actions </div> -->
    </div>
    <div v-for="client of clients" class="md-client-list">
      <div class="md-client-client">{{ client.client }}</div>
      <div class="md-client-state">{{ client.client_email }}</div>
      <!-- <div class="md-client-action">
        <ul class="layout-client-action-menu">
          <li class="md-client-action-item">
            <button type="button" class="md-action-btn btn" @click="getChosenClient(client);">View</button>
          </li>
          <li class="md-client-action-item">
            <router-link class="md-action-btn btn" :to="{ path: '/edit/' + client.client + '/' + client._id }">Edit</router-link>
          </li>
          <li class="md-client-action-item">
            <button type="button" class="md-action-btn btn" @click="deleteBudget(client)">Delete</button>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'BudgetList',
    props: ['clients', 'getChosenClient'],
    methods: {
      deleteBudget: function (client) {
        Axios.delete(`${urlPrefix}/api/clients/` + client._id, {
          _id: client._id
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

  .md-client-list {
    display: flex;
    width: 100%;
    color: $primary-color;

    @media (max-width: 800px) {
      margin: 30px 0;
    }

    & > * {
      width: 100%;
      background-color: rgba(0,0,0, .6);
      border: 1px solid #404040;
      padding: 0 15px;
      display: flex;
      height: 35px;
      align-items: center;
    }

    .md-client-description {
      display: none;
    }

    &:not(:first-of-type) {
      & > * {
        background-color: rgba(55, 255, 236, .61);
        height: 45px;
      }

      .md-client-description {
        display: none;
      }

      .md-client-state {
        text-transform: capitalize;
      }

      .md-client-action {
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

      .md-client-description {
        display: flex;
        flex-grow: 1;
      }

      .md-client-action {
        display: none;
      }
    }

    .md-client-action {
      display: flex;
      justify-content: center;
    }

    .layout-client-action-menu {
      display: flex;
      margin: 0;
      justify-content: center;

      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
      }
    }

    .md-client-action-item {
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
