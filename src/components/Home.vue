<template>
  <div class="row">
    <div class="col s12">
      <main class="layout-main-page">
        <section class="layout-budget-area">
          <h1 class="md-title">orçamentos</h1>
          <layout-budget-list :lists="teste"></layout-budget-list>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        teste: [
          {
            client: 'Cliente',
            state: 'Estado',
            description: 'Ações'
          }
        ]
      }
    }
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
  }
</style>
