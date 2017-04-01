<template>
  <div class="layout-create-new-budget-item">
    <div class="md-create-new-budget-item" v-for="item of budgetItems">
      <button class="md-delete-budget-item-btn btn red lighten-2" type="button">-</button>
      <input class="md-budget-item-title" v-model="item.title" name="budget-item-title" type="text" placeholder="Título do item">
      <input class="md-budget-item-quantity" v-model="item.quantity" name="budget-item-qt" type="text" placeholder="0">
      <input class="md-budget-item-price" v-model="item.price" name="budget-item-price" type="text" placeholder="00,00">
      <span class="md-budget-item-subtotal">R$ {{ item.subtotal }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateBudget',
    props: ['budgetItems']
  }
</script>

<style lang="scss">
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  .md-create-new-budget-item {
    margin: 30px 15px;
    display: flex;
    align-items: center;

    input[type=text] {
      margin: 0 15px;
      height: 35px;
      border: 1px solid #9e9e9e;
      padding: 0 15px;
      color: $primary-color;

      &:focus {
        border: 1px solid #26a69a;
      }

      @media (max-width: 600px) {
        width: 100%;
        text-align: center;
        justify-content: center;
        margin: 15px 0;
        padding: 0;
      }

      &:nth-of-type(2) {
        width: 10%;

        @media (max-width: 600px) {
          width: 100%;
        }
      }

      &:last-of-type {
        width: 27%;

        @media (max-width: 600px) {
          width: 100%;
        }
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      margin: 60px 15px;
    }
  }

  .md-budget-item-subtotal {
    width: 55%;
    color: $primary-color;
    font-size: 16px;
    text-align: right;

    @media (max-width: 600px) {
      width: 100%;
      text-align: center;
    }
  }

  .md-delete-budget-item-btn {
    font-size: 26px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
</style>
