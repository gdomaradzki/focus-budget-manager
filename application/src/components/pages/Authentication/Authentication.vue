<template>
  <div class="l-auth">
    <v-form v-model="validLogin">
      <span v-if="message != null">{{ message }}</span>
      <v-text-field label="Username"
                    v-model="credentials.username"
                    prepend-icon="account_box"
                    single-line
                    required>
      </v-text-field>

      <v-text-field label="Password"
                    v-model="credentials.password"
                    prepend-icon="lock"
                    :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                    :type="passwordVisible ? 'text' : 'password'"
                    single-line
                    required>
      </v-text-field>

      <v-btn block color="primary" @click.native="submitAuthentication()">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
  import Authentication from '@/components/pages/Authentication'
  export default {
    data () {
      return {
        validLogin: false,
        passwordVisible: false,
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
  span { color: white }

  .l-auth {
    background-color: $background-color;
    padding: 15px;
    margin: 45px 0;
    position: relative;
  }
</style>
