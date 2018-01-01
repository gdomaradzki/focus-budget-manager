<template>
  <div class="l-client-creation">
    <v-layout row wrap>
      <v-flex xs12 md4>
        <v-text-field label="Name"
                      v-model="client.name"
                      required
                      color="green lighten-1">
        </v-text-field>
      </v-flex>

      <v-flex xs12 md3 offset-md1>
        <v-text-field label="Email"
                      v-model="client.email"
                      required
                      color="green lighten-1">
        </v-text-field>
      </v-flex>

      <v-flex xs12 md3 offset-md1>
        <v-text-field label="Phone"
                      v-model="client.phone"
                      required
                      mask="phone"
                      color="green lighten-1">
        </v-text-field>
      </v-flex>

      <v-flex xs12 md2 offset-md10>
        <v-btn block color="md-add-item-btn green lighten-1" @click.native="updateClient(client)">Update</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props: ['updateClient', 'selectedClient'],
    data () {
      return {
        client: {
          name: null,
          email: null,
          phone: null
        }
      }
    },
    mounted () {
      this.client = this.selectedClient
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/styles";

  .uppercased {
    text-transform: uppercase;
  }

  .l-client-creation {
    label, input, .icon, .input-group__selections__comma, textarea {
      color: #66bb6a!important;
    }

    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }

    .input-group__input {
      border-color: $border-color-input !important;

      .input-group--text-field__prefix {
        margin-bottom: 3px !important;
      }
    }

    .input-group--focused {
      .input-group__input {
        border-color: #66bb6a!important;
      }
    }
  }
</style>
