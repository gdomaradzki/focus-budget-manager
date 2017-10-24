<template>
  <v-app>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles";

  body {
    background: url('./assets/images/background.jpg') no-repeat center center fixed;
    background-size: cover;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $background-tint;
      opacity: .3;
      z-index: -1;
    }

    .application {
      background: none;
    }
  }
</style>
