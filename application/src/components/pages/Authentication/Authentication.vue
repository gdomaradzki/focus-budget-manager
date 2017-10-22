<template>
  <div class="l-auth">
    <v-form v-model="validLogin">
      <v-text-field label="Username"
                    v-model="credentials.username"
                    prepend-icon="account_box"
                    :rules="rules"
                    required
                    color="light-blue lighten-1">
      </v-text-field>

      <v-text-field label="Password"
                    v-model="credentials.password"
                    prepend-icon="lock"
                    :rules="rules"
                    :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                    :type="passwordVisible ? 'text' : 'password'"
                    color="light-blue lighten-1"
                    required>
      </v-text-field>

      <v-snackbar timeout="6000"
                  bottom="bottom"
                  color="red lighten-1"
                  v-model="snackbar">
        {{ message }}
      </v-snackbar>

      <v-btn block color="light-blue lighten-1" @click.native="submitAuthentication()">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
  import Authentication from '@/components/pages/Authentication'
  export default {
    data () {
      return {
        snackbar: false,
        validLogin: false,
        passwordVisible: false,
        rules: [ (value) => !!value || 'This field is required' ],
        credentials: {
          username: '',
          password: ''
        },
        message: ''
      }
    },
    methods: {
      submitAuthentication () {
        Authentication.authenticate(this, this.credentials, '/')
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../../assets/styles";

  .l-auth {
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 272px;
    max-width: 320px;
    animation: bounceIn 1s forwards ease;
  }
</style>
