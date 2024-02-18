<template>
  <div class="login-container">
    <div class="login-form" style="margin-bottom: auto">
      <h2>Login</h2>
      <form @submit.prevent="signin">
        <div class="text-red" v-if="error">{{ error }}</div>
        <label for="email">Login</label>
        <input type="email" id="email" v-model="email">

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">

        <button type="submit">Login</button>

        <div class="mb-6">
          <router-link to="/signup" class="link-grey">Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.plain.post('/signin', { email: this.email, password: this.password })
        .then(response => this.signinSuccesfull(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccesfull (response) {
      console.log('here')
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }

      console.log('aqui')
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/match')
    },
    signinFailed (error) {
      console.log('erro', error)
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/match')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/path/to/your/image.jpg') center/cover no-repeat;
  filter: blur(5px); /* Optional: Apply a blur effect to the background */
}

.login-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Add more styles as needed */
</style>
