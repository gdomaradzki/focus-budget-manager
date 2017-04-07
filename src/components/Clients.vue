<template>
  <div class="row">
    <div class="col s12">
      <section class="layout-client-listing">
        <h2 class="md-title">clients lists</h2>

        <layout-client-list :clients="clients" :getChosenClient="getChosenClient"></layout-client-list>

        <router-link class="md-return-btn btn" to="/">return</router-link>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Clients',
    props: ['clients']
  }
</script>

<style lang="scss">
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  select {
    display: flex;
  }

  .layout-client-listing {
    background-color: $secondary-color;
    padding-bottom: 60px;
    position: relative;
    color: $primary-color;
    padding: 0 15px 60px;

    .md-return-btn {
      background-color: darken(#f1e46e, 10%);
      margin-top: 30px;

      &:hover {
        background-color: #f1e46e;
      }

      &:focus, &:active {
        background-color: darken(#f1e46e, 20%);
      }
    }
  }

  .md-title {
    color: $primary-color;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 15px 15px 0;
  }
</style>
