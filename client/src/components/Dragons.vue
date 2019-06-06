<template>
  <div class="col-6">
    <h3>Choose Your Dragon!</h3>
    <div class="row">
      <div
        class="card col-6"
        v-for="dragon in dragons"
        :key="dragon._id"
        @click="selectDragon(dragon._id)"
        :class="{selected: dragon._id == selectedDragon}"
      >
        <img :src="dragon.imgUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{dragon.name}}</h5>
          <h5>HP: {{dragon.hp}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dragons",
  data() {
    return {};
  },
  computed: {
    dragons() {
      return this.$store.state.dragons;
    },
    selectedDragon() {
      return this.$store.state.dragon;
    }
  },
  methods: {
    selectDragon(id) {
      this.$store.dispatch("setDragon", id);
    }
  }
};
</script>

<style>
</style>
