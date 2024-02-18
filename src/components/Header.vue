<template>
  <header>
    <div>
      <img src="../assets/ogb_logo.png"
           :style="{
            width: '140px',
            height: 'auto',
            position: 'absolute',
            top: '5px',
            left: '50px'
  }">
      <nav>
        <ul>
          <li>
            <router-link to="/">Entrar</router-link>
          </li>
          <li>
            <router-link to="/signup">Cadastrar</router-link>
          </li>
          <li>
            <a href="@" @click.prevent="signOut" class="link-grey px-2 no-underline" v-if="signedIn()">Sair</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  created () {
    this.signedIn()
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signedIn () {
      return localStorage.signedIn
    },
    signOut () {
      console.log(this)
      this.secured.get('/signin')
        .then(response => {
          delete localStorage.csrf
          delete localStorage.signedIn
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Não foi possível sair'))
    }
  }
}

</script>

<style scoped>
/* Estilize seu header aqui conforme desejar */
header {
  background-color: #9999;
  color: #fff;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li button {
  background: none;
  border: 50px;
  color: #ffffff;
  cursor: pointer;
}
</style>
