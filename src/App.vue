<template>
  <div id="app">
    <userlocation />
  </div>
</template>
<script>
import userlocation from "./components/userlocation.vue";

export default {
  name: "App",
  components: {
    userlocation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
