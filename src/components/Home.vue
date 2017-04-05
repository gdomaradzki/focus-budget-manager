<template>
  <div class="row">
    <div class="col s12">
      <main class="layout-main-page">
        <section class="layout-budget-area">
          <h1 class="md-title">Budget Manager</h1>
          <layout-budget-list :budgets="budgets" :clients="clients"></layout-budget-list>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: ['budgets', 'clients']
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  main {
    background-color: $secondary-color;
  }

  .md-title {
    color: $primary-color;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .layout-budget-area {
    margin: 0 15px;
    padding-bottom: 60px;
  }
</style>
