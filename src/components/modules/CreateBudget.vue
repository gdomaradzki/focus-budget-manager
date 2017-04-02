<template>
  <div class="layout-create-new-budget-item">
    <div class="md-create-new-budget-item" v-for="item of budgetItems.budgets">
      <button class="md-delete-budget-item-btn btn red lighten-2"
              type="button"
              @click="test ()">
              -
      </button>
      <input class="md-budget-item-title" v-model="item.itemTitle" name="budget-item-title" type="text" placeholder="Budget Item Title">
      <input class="md-budget-item-quantity" v-model="item.itemQuantity" name="budget-item-qt" type="text" placeholder="0">
      <input class="md-budget-item-price" v-model="item.itemPrice" name="budget-item-price" type="text" placeholder="00.00">
      <span class="md-budget-item-subtotal">$ {{ item.items[0].itemSubtotal }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateBudget',
    props: ['budgetItems', 'budgetItemDeletion'],
    data () {
      return {}
    },
    watch: {
      // 'budgetItems': function () {
      //   let budgets = this.budgetItems
      //   for (let i in budgets) {
      //     let quantity = budgets[i].items[i].itemQuantity
      //     let price = budgets[i].items[i].itemPrice
      //     let subtotal = quantity * price
      //     budgets[i].items[i].itemSubtotal = subtotal
      //     console.log(budgets[i].items[i].itemSubtotal)
      //   }
      // }
    },
    mounted: function () {
      // setInterval(() => {
      //   console.log(this.budgetItems.budgets)
      // }, 1000)
    }
    // watch: {
    //   'item.itemSubtotal'
    // },
    // watch: {
    //   'clientList': function (value) {
    //     if (value === 'new-client') {
    //       this.isHidden = !this.isHidden
    //       this.isVisible = !this.isVisible
    //     } else {
    //       this.isHidden = true
    //       this.isVisible = false
    //     }
    //   }
    // },
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
