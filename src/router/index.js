import Vue from 'vue'
import Router from 'vue-router'

// Import Components
import Header from '@/components/root/Header'
import Logo from '@/components/modules/Logo'
import Dropdown from '@/components/modules/Dropdown'
import DropdownArrow from '@/components/modules/DropdownArrow'
import SearchInput from '@/components/modules/SearchInput'
import BudgetList from '@/components/modules/BudgetList'
import CreateBudget from '@/components/modules/CreateBudget'

// Import Page Components
import Home from '@/components/Home'
import Budget from '@/components/Budget'
import CurrentBudget from '@/components/CurrentBudget'

Vue.use(Router)

// Define components
// Layouts
Vue.component('layout-header', Header)
Vue.component('layout-budget-list', BudgetList)

// Modules
Vue.component('md-logo', Logo)
Vue.component('md-dropdown-nav', Dropdown)
Vue.component('md-dropdown-arrow', DropdownArrow)
Vue.component('md-search-input', SearchInput)
Vue.component('md-create-new-budget-item', CreateBudget)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new/budget',
      name: 'Budget',
      component: Budget
    },
    {
      path: '/edit/budget/:client',
      name: 'CurrentBudget',
      component: CurrentBudget
    }
  ]
})
