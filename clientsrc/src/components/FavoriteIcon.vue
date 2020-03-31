<template>
  <div>
    <i
      class="fa fa-fw action"
      :class="favorited ? 'fa-heart text-danger': 'fa-heart-o'"
      @click="toggleFavorite"
    ></i>
  </div>
</template>

<script>
export default {
  name: "FavoriteIcon",
  props: {
    pin: { type: Object, required: true }
  },
  computed: {
    // favorites() {
    //   // REVIEW This is how we access data in a store submodule
    //   return this.$store.state.favoritesStore.favorites;
    // },
    favorited() {
      return this.$store.getters.favorites[this.pin.id];
    }
  },
  methods: {
    toggleFavorite() {
      if (this.favorited) {
        this.$store.dispatch("removeFavorite", this.favorited);
      } else {
        this.$store.dispatch("addFavorite", this.pin);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.action {
  cursor: pointer;
}
</style>
