<template>
  <div class="row">
    <div class="col s12">
      <header class="layout-main-header">
        <router-link to="/">
          <md-logo></md-logo>
        </router-link>
        <div class="md-flex-disperser"></div>
        <md-search-input></md-search-input>
        <md-dropdown-nav dropdownName="Budget" :links="budget" :button="1"></md-dropdown-nav>
        <md-dropdown-nav dropdownName="Status" :links="state" :button="2"></md-dropdown-nav>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        budget: [
          {
            id: '1',
            name: 'New',
            routePath: '/new/budget'
          },
          {
            name: 'Budgets',
            routePath: '/'
          },
          {
            name: 'Clients',
            routePath: '/'
          }
        ],
        state: [
          {
            name: 'Approved',
            routePath: '/'
          },
          {
            name: 'Denied',
            routePath: '/'
          },
          {
            name: 'Waiting',
            routePath: '/'
          },
          {
            name: 'Being Edited',
            routePath: '/'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  nav {
    background-color: transparent;
    box-shadow: none;
    display: flex;
    align-items: center;
    width: auto;

    ul {
      a {
        padding: 0;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  .layout-main-header {
    display: flex;
    background-color: $secondary-color;
    padding: 15px 0;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .md-dropdown-nav {
    @media (max-width: 600px) {
      width: 100%;
    }
  }
</style>
