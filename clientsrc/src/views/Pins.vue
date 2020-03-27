<template>
  <div class="card p-2">
    <form @submit.prevent="createPin">
      <div class="form-group">
        <label for="title">Title</label>
        <input class="form-control" type="text" v-model="newPin.title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" v-model="newPin.description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Pins",
  data() {
    return {
      newPin: {}
    };
  },
  methods: {
    createPin() {
      this.newPin.creator = this.$auth.user;
      this.$store.dispatch("createPin", this.newPin);
      this.newPin = {};
    }
  }
};
</script>

<style>
</style>