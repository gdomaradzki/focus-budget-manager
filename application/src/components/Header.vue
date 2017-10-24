<template>
  <header class="l-header-container">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-text-field v-model="search"
                      label="Search"
                      append-icon="search"
                      color="teal accent-3">
        </v-text-field>
      </v-flex>

      <v-flex xs12 offset-md2 md1>
        <v-btn block color="teal accent-3">Clients</v-btn>
      </v-flex>

      <v-flex xs12 offset-md1 md2>
        <v-select label="Status"
                  color="teal accent-3"
                  v-model="status"
                  :items="statusItems"
                  single-line>
        </v-select>
      </v-flex>
    </v-layout>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        status: '',
        statusItems: [
          'All', 'Approved', 'Denied', 'Waiting', 'Writing', 'Editing'
        ]
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

    label {
      color: #1de9b6!important;
    }

    input {
      color: #1de9b6!important;
    }

    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }

    .btn {
      margin-top: 15px;
    }

    .icon {
      color: #1de9b6!important;
    }
  }
</style>
