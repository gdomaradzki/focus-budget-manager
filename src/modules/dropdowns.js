'use strict';
class Dropdown {
  constructor(budget, state, budgetButton, stateButton) {
    this.budget = budget;
    this.state = state;
    this.budgetButton = budgetButton;
    this.stateButton = stateButton;
  }

  setDropdowns() {
    this.budget = document.getElementsByClassName('module-dropdown-list')[0];
    this.state = document.getElementsByClassName('module-dropdown-list')[1];
  }

  setButtons() {
    this.budgetButton = document.getElementsByClassName('module-dropdown-btn')[0];
    this.stateButton = document.getElementsByClassName('module-dropdown-btn')[1];
  }

  collapseDropdown(element) {
    element.className = 'layout-vertical-list module-dropdown-list is-collapsed';
  }

  hideDropdown(element) {
    element.className = 'layout-vertical-list module-dropdown-list is-hidden';
  }
}

module.exports = Dropdown;
