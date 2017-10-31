<template>
  <header class="l-header-container">
    <v-layout row wrap :class="budgetsVisible ? 'l-budgets-header' : 'l-clients-header'">
      <v-flex xs12 md5>
        <v-text-field v-model="search"
                      label="Search"
                      append-icon="search"
                      :color="budgetsVisible ? 'light-blue lighten-1' : 'green lighten-1'">
        </v-text-field>
      </v-flex>

      <v-flex xs12 offset-md1 md1>
        <v-btn block
               :color="budgetsVisible ? 'light-blue lighten-1' : 'green lighten-1'"
               @click.native="$emit('toggleVisibleData')">
               {{ budgetsVisible ? "Clients" : "Budgets" }}
        </v-btn>
      </v-flex>

      <v-flex xs12 offset-md1 md2>
        <v-select label="Status"
                  :color="budgetsVisible ? 'light-blue lighten-1' : 'green lighten-1'"
                  v-model="status"
                  :items="statusItems"
                  single-line>
        </v-select>
      </v-flex>

      <v-flex xs12 offset-md1 md1>
        <v-btn block color="red lighten-1 white--text" @click.native="submitSignout()">Sign out</v-btn>
      </v-flex>
    </v-layout>
  </header>
</template>

<script>
  import Authentication from '@/components/pages/Authentication'
  export default {
    props: ['budgetsVisible'],
    data () {
      return {
        search: '',
        status: '',
        statusItems: [
          'All', 'Approved', 'Denied', 'Waiting', 'Writing', 'Editing'
        ]
      }
    },
    methods: {
      submitSignout () {
        Authentication.signout(this, '/login')
      }
    }
  }
</script>

<style lang="scss">
  @import "./../assets/styles";

  .l-header-container {
    background-color: $background-color;
    margin: 0 auto;
    padding: 0 15px;
    min-width: 272px;

    .l-budgets-header {
      label, input, .icon, .input-group__selections__comma {
        color: #29b6f6!important;
      }
    }

    .l-clients-header {
      label, input, .icon, .input-group__selections__comma {
        color: #66bb6a!important;
      }
    }

    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }

    .btn {
      margin-top: 15px;
    }
  }
</style>
