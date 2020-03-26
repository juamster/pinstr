<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { onAuth } from "@bcwdev/auth0-vue";
import { ConfigureResource } from "./store/resource";
export default {
  name: "App",
  components: {
    Navbar
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      try {
        console.log("before auth");
        await onAuth();
        console.log("here");
        if (this.$auth.isAuthenticated) {
          ConfigureResource(this);
        }
        this.$store.dispatch("getPins");
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>


<style lang="scss">
</style>
