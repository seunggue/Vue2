<template>
  <div>
    <form action>
      ID:
      <input type="text" v-model="userID" />
      <p>{{userID}}</p>PW:
      <input type="text" />
      <input type="submit" value="login" />
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userID: ""
    };
  }
};
</script>

<style>
</style>