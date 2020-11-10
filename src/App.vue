<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick exampd make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <router-view></router-view>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  router,
  created() {
    this.$http.get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
$color:red;

#app {
  background-color: $color;
}
</style>
