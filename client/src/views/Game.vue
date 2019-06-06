<template>
  <div class="game container-fluid">
    <div class="row" v-if="game._id && !game.gameOver">
      <div class="col-6">
        <div class="card champion">
          <img :src="game.champion.imgUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{game.champion.name}}</h5>
            <p class="card-text">Health: {{game.championHp}}/{{game.champion.hp}}</p>
            <button
              v-for="attack in game.champion.attacks"
              :key="attack._id"
              class="btn btn-warning m-1"
              @click="sendAttack(attack.name)"
            >{{attack.name}} : {{attack.damage}}</button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card dragon">
          <img :src="game.dragon.imgUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{game.dragon.name}}</h5>
            <p class="card-text">Health: {{game.dragonHp}}/{{game.dragon.hp}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else-if="game._id">
      <div class="col">
        <h1>THIS GAME HAS ENDED!!!</h1>
        <h3>The winner was {{ game.dragonHp > game.championHp ? game.dragon.name : game.champion.name }}</h3>
        <router-link :to="{name: 'home'}">Retry?</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h6>
          <em>
            <strong>{{game.history[game.history.length-1]}}</strong>
          </em>
        </h6>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Game",
  props: ["id"],
  mounted() {
    this.$store.dispatch("getGameById", this.id);
  },
  data() {
    return {};
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  },
  methods: {
    sendAttack(name) {
      let attackToSend = {
        attack: name,
        id: this.id
      };
      this.$store.dispatch("attack", attackToSend);
    }
  }
};
</script>

<style>
.card {
  max-height: 75vh;
}
</style>
