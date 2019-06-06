<template>
  <div class="home container-fluid">
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
  components: {
    Champions,
    Dragons
  }
};
</script>
