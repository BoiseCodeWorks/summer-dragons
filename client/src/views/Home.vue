<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <button class="btn btn-success" v-show="dragon && champion" @click="createGame">FIGHT!!!</button>
      </div>
    </div>
    <div class="row">
      <champions/>
      <dragons/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Champions from "@/components/Champions.vue";
import Dragons from "@/components/Dragons.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getChampions");
    this.$store.dispatch("getDragons");
  },
  computed: {
    dragon() {
      return this.$store.state.dragon;
    },
    champion() {
      return this.$store.state.champion;
    }
  },
  methods: {
    createGame() {
      let newGame = {
        dragon: this.dragon,
        champion: this.champion
      };
      this.$store.dispatch("createGame", newGame);
    }
  },
  components: {
    Champions,
    Dragons
  }
};
</script>

<style>
.card:hover {
  border: 2px solid blue;
}
.selected {
  border: 3px solid green;
}
</style>
