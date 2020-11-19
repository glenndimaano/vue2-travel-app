<template>
  <div>
      <h1>Login</h1>
      <div>
          <label for="unsermae">Username</label>
          <input v-model="username" type="text" name="username" id="username">
          <label for="password">password</label>
          <input v-model="password" type="password" name="password" id="password">
          <button @click="login">login</button>
      </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login() {
            // login auth
            if ( !this.username) {
                return false
            } else {
                 store.user = this.username
                const redirectPath = this.$route.query.redirect || '/'
               
                this.$router.push(redirectPath)  
            }
           
        }
    }
}
</script>
