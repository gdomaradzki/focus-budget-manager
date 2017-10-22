<template>
  <div>
    <h3>Hi! this is our App's Home</h3>
    <ul>
      <li v-if="users != null" v-for="user in users">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Authentication from '@/components/pages/Authentication'

  const BudgetManagerAPI = `http://${window.location.hostname}:3001`

  export default {
    data () {
      return {
        users: []
      }
    },
    mounted () {
      this.getAllUsers()
    },
    methods: {
      getAllUsers (context) {
        Axios.get(`${BudgetManagerAPI}/api/v1/users`, {
          headers: {
            'Authorization': Authentication.getAuthenticationHeader(this)
          }
        }).then(({data}) => (this.users = data))
      }
    }
  }
</script>
