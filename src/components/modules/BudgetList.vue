<template>
  <div class="layout-budget-list">
    <div v-if="lists!=null" v-for="item of lists" class="md-budget-list">
      <div class="md-budget-client">{{ item.client }}</div>
      <div class="md-budget-state">{{ item.state }}</div>
      <div class="md-budget-description"> {{ item.description }}</div>
      <div class="md-budget-action">
        <ul class="layout-budget-action-menu">
          <li class="md-budget-action-item">
            <button type="button" class="md-action-btn btn">Visualizar</button>
          </li>
          <li class="md-budget-action-item">
            <button type="button" class="md-action-btn btn">Editar</button>
          </li>
          <li class="md-budget-action-item">
            <button type="button" class="md-action-btn btn">Excluir</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BudgetList',
    props: ['lists']
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  // .layout-budget-list {
  //   display: flex;
  // }

  .md-budget-list {
    display: flex;
    width: 100%;
    color: $primary-color;

    & > * {
      width: 100%;
      background-color: rgba(0,0,0, .6);
      border: 1px solid #404040;
      padding: 0 15px;
      display: flex;
      height: 35px;
      align-items: center;
    }

    .md-budget-description {
      display: none;
    }

    &:first-of-type {
      & > * {
        height: 45px;
      }

      .md-budget-description {
        display: flex;
      }

      .md-budget-action {
        display: none;
      }
    }

    .md-budget-action {
      display: flex;
      justify-content: center;
    }

    .layout-budget-action-menu {
      display: flex;
      margin: 0;
      justify-content: center;
    }

    .md-budget-action-item {
      margin: 0 15px;
    }
  }
</style>
