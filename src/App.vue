<template>
  <div id="app">
    <div class="container">
      <layout-header></layout-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  $background-color: #1734c1;

  // Override Materialize Default
  .container {
    margin-top: 15px !important;
    position: relative;
    .row {
      margin-bottom: 0;
    }
  }

  body {
    background: url('https://chrismartinphotography.files.wordpress.com/2013/01/2012-landscapes-c2a9-christopher-martin-93441.jpg') no-repeat center center fixed;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $background-color;
      opacity: .3;
      z-index: -1;
    }
  }

  @media screen and (max-width: 992px) {
    .md-flex-disperser {
      width: 100% !important;
    }
  }

  // States
  .is-hidden {
    transition: .5s ease;
    max-height: 0;
  }

  .is-collapsed {
    transition: 3s ease;
    max-height: 3000px;
  }
</style>
