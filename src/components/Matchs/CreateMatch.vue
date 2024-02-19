<template>
  <div id="app">
    <h2>Criar Novo Match</h2>
    <form @submit.prevent="createMatch">
      <div>
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="title" required>
      </div>
      <div>
        <label for="game">Jogo:</label>
        <input type="text" id="game" v-model="game" required>
      </div>
      <div>
        <label for="date">Data:</label>
        <input type="date" id="date" v-model="date" required>
      </div>
      <div>
        <label for="presence">Presença:</label>
        <input type="checkbox" id="presence" v-model="presence">
      </div>
      <div>
        <label for="players">Jogadores:</label>
        <input type="number" id="players" v-model="players" required>
      </div>
      <div>
        <label for="local">Local:</label>
        <input type="text" id="local" v-model="local">
      </div>
      <button type="submit">Criar Match</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'match',
  data () {
    return {
      title: '',
      game: '',
      date: '',
      presence: '',
      players: '',
      local: '',
      error: ''
    }
  },
  methods: {
    createMatch () {
      this.plain.post('/matches', {
        title: this.title,
        game: this.game,
        date: this.date,
        presence: this.presence,
        players: this.players,
        local: this.local
      })
        .then(response => this.createSuccesfull(response))
        .catch(error => this.createFailed(error))
    },
    createSuccesfull (response) {
      this.error = ''
      this.$router.replace('/match')
    },
    createFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Não foi possível criar a partida'
    }
  }
}

</script>

<style>

</style>
