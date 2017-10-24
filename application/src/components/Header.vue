<template>
  <header class="l-header-container">
    <v-text-field v-model="search"
                  label="Search"
                  color="teal accent-3"
                  append-icon="search"
                  single-line>
    </v-text-field>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="scss">
  @import "./../assets/styles";

  .l-header-container {
    background-color: $background-color;
    margin: 0 auto;
    padding: 0 15px;
    min-width: 272px;
  }
</style>
