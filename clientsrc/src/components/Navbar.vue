<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">Pinstr</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Dashboard' }"
        >
          <router-link class="nav-link" :to="{ name: 'Dashboard' }">My-Dashboard</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <div v-if="!$auth.isAuthenticated">
          <button class="btn btn-success" @click="login()">Login</button>
        </div>
        <div class="d-flex" v-else>
          <user-avatar :user="$auth.user" show-name height="40" circle />
          <button class="btn btn-danger" @click="logout">logout</button>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import UserAvatar from "./UserAvatar.vue";
export default {
  name: "Navbar",
  methods: {
    async login() {
      try {
        await this.$auth.loginWithRedirect();
      } catch (e) {
        console.error(e);
      }
    },
    async logout() {
      await this.$auth.logout({
        redirectTo: window.location.origin
      });
    }
  },
  components: {
    UserAvatar
  }
};
</script>

<style></style>