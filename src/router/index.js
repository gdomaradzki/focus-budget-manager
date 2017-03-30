import Vue from 'vue'
import Router from 'vue-router'

// Import Components
import Header from '../components/root/Header'
import Logo from '../components/modules/Logo'
import Dropdown from '../components/modules/Dropdown'
import DropdownArrow from '../components/modules/DropdownArrow'
import SearchInput from '../components/modules/SearchInput'
import BudgetList from '../components/modules/BudgetList'

// Import Page Components
import Home from '@/components/Home'

Vue.use(Router)

// Define components
Vue.component('layout-header', Header)
Vue.component('md-logo', Logo)
Vue.component('md-dropdown-nav', Dropdown)
Vue.component('md-dropdown-arrow', DropdownArrow)
Vue.component('md-search-input', SearchInput)
Vue.component('layout-budget-list', BudgetList)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
