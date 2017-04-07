<template>
  <div class="row">
    <div class="col s12">
      <header class="layout-main-header">
        <router-link to="/">
          <md-logo></md-logo>
        </router-link>
        <div class="md-flex-disperser"></div>
        <md-search-input></md-search-input>
        <md-dropdown-nav ref="budgetDropdown" dropdownName="Budget" :links="budget" :button="1" :toggle="toggle"></md-dropdown-nav>
        <md-dropdown-nav ref="stateDropdown" dropdownName="Status" :links="state" :button="2" :getBudgetsFromStatus="getBudgetsFromStatus" :toggle="toggle"></md-dropdown-nav>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['getBudgetsFromStatus'],
    data () {
      return {
        budget: [
          {
            id: '1',
            name: 'New',
            routePath: '/new/budget'
          },
          // {
          //   name: 'Budgets',
          //   routePath: '/'
          // },
          {
            name: 'Clients',
            routePath: '/clients'
          }
        ],
        state: [
          {
            name: 'All',
            routePath: '/',
            value: 'all'
          },
          {
            name: 'Approved',
            routePath: '/',
            value: 'approved'
          },
          {
            name: 'Denied',
            routePath: '/',
            value: 'denied'
          },
          {
            name: 'Waiting',
            routePath: '/',
            value: 'waiting'
          },
          {
            name: 'Writing',
            routePath: '/',
            value: 'writing'
          },
          {
            name: 'Editing',
            routePath: '/',
            value: 'editing'
          }
        ]
      }
    },
    methods: {
      toggle: function (button) {
        let budgetDropdown = this.$refs.budgetDropdown
        let stateDropdown = this.$refs.stateDropdown
        if (button === 1) {
          budgetDropdown.isHidden = !budgetDropdown.isHidden
          budgetDropdown.isCollapsed = !budgetDropdown.isCollapsed
          stateDropdown.isHidden = true
          stateDropdown.isCollapsed = false
        } else {
          stateDropdown.isHidden = !stateDropdown.isHidden
          stateDropdown.isCollapsed = !stateDropdown.isCollapsed
          budgetDropdown.isHidden = true
          budgetDropdown.isCollapsed = false
        }
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
