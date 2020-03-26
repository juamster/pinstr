<template>
  <div class="card p-2 pin">
    <h4>{{pin.title}}</h4>
    <p>{{pin.description}}</p>
    <hr />
    <div class="d-flex justify-content-end">
      <div>
        <i v-if="$auth.user.email == pin.creatorEmail">delete pin</i>
      </div>
      <user-avatar :user="pin.creator" height="40" rounded show-name left />
    </div>
  </div>
</template>

<script>
import UserAvatar from "./UserAvatar";
export default {
  name: "Pin",
  props: {
    pin: { type: Object, required: true }
  },
  components: {
    UserAvatar
  }
};
</script>

<style>
</style>