<template>
  <div class="col-6">
    <h3>Choose Your Champion!</h3>
    <div class="row">
      <div
        class="card col-6"
        v-for="champion in champions"
        :key="champion._id"
        @click="selectChampion(champion._id)"
        :class="{selected: champion._id == selectedChamp}"
      >
        <img :src="champion.imgUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{champion.name}}: {{champion.class}}</h5>
          <h5>HP: {{champion.hp}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Champions",
  data() {
    return {};
  },
  computed: {
    champions() {
      return this.$store.state.champions;
    },
    selectedChamp() {
      return this.$store.state.champion;
    }
  },
  methods: {
    selectChampion(id) {
      this.$store.dispatch("setChampion", id);
    }
  }
};
</script>

<style>
</style>
