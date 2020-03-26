<template>
  <div class="container-fluid">
    <div class="row">
      <h1>DASHBOARD</h1>
    </div>
    <div class="row">
      <div class="col-4">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      newPin: {}
    };
  },
  methods: {
    createPin() {
      this.$store.dispatch("createPin", this.newPin);
      this.newPin = {};
    }
  }
};
</script>

<style>
</style>