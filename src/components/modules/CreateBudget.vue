<template>
  <div class="layout-create-new-budget-item">
    <div class="md-create-new-budget-item" v-for="item of budgetItems">
      <button class="md-delete-budget-item-btn btn"
              type="button"
              @click="deleteBudgetItem(item)">
              -
      </button>
      <input class="md-budget-item-title" type="text" placeholder="Budget Item Title" v-model="item.itemTitle">
      <input class="md-budget-item-quantity" type="text" placeholder="Qty" v-model="item.itemQuantity">
      <input class="md-budget-item-price" type="text" placeholder="Price" v-model="item.itemPrice">
      <span class="md-budget-item-subtotal">$ {{ item.itemSubtotal }} </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateBudget',
    props: ['budgetItems'],
    data () {
      return {}
    },
    mounted: function () {
      setInterval(() => {
        this.subtotalCalc()
      }, 1000)
    },
    methods: {
      subtotalCalc: function () {
        let items = this.budgetItems
        for (let i in items) {
          let quantity = items[i].itemQuantity
          let price = items[i].itemPrice
          let subtotal = quantity * price
          items[i].itemSubtotal = subtotal
        }
      },
      deleteBudgetItem: function (item) {
        this.budgetItems.splice(item, 1)
      }
    }
  }
</script>

<style lang="scss">
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  .layout-create-new-budget-item {
    width: 100%;
  }

  .md-create-new-budget-item {
    margin: 15px 0;
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
      margin: 60px 0;
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
    background-color: #ef5350 !important;

    &:hover {
      background-color: #e57373 !important;
    }

    &:active, &:focus {
      background-color: #e53935 !important;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .is-area-hidden {
    transition: .3s ease;
    opacity: 0;
    transform: translateY(-60px);
  }

  .is-area-visible {
    transition: .5s ease;
    opacity: 1;
    transform: translateY(0);
  }
</style>
