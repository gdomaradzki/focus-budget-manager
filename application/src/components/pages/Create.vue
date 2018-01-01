<template>
  <div class="l-create-page">
    <budget-creation v-if="budgetCreation && !editPage" slot="budget-creation" :clients="clients" :saveBudget="saveBudget"></budget-creation>
    <client-creation v-if="!budgetCreation && !editPage" slot="client-creation" :saveClient="saveClient"></client-creation>

    <budget-edit v-else-if="budgetEdit && editPage"
      slot="budget-creation"
      :clients="clients"
      :selectedBudget="budget"
      :fixClientNameAndUpdate="fixClientNameAndUpdate">
    </budget-edit>

    <client-edit v-else-if="!budgetEdit && editPage"
      slot="client-creation"
      :selectedClient="client"
      :updateClient="updateClient">
    </client-edit>
  </div>
</template>

<script>
  import BudgetCreation from './../Creation/BudgetCreation'
  import ClientCreation from './../Creation/ClientCreation'
  import BudgetEdit from './../Creation/BudgetEdit'
  import ClientEdit from './../Creation/ClientEdit'
  export default {
    props: [
      'budgetCreation', 'clients', 'saveBudget',
      'saveClient', 'budget', 'client', 'updateClient',
      'fixClientNameAndUpdate', 'editPage', 'budgetEdit'
    ],
    components: {
      'budget-creation': BudgetCreation,
      'client-creation': ClientCreation,
      'budget-edit': BudgetEdit,
      'client-edit': ClientEdit
    }
  }
</script>
