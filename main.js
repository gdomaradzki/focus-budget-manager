// Importing CSS
import css from './src/assets/scss/app.scss';

// Import modules
let Dropdown = require('./src/modules/dropdowns.js');

(function dropdownHandler() {
  let isBudgetCollapsed = false;
  let isStateCollapsed = false;
  let dropdown = new Dropdown();

  dropdown.setDropdowns();
  dropdown.setButtons();

  // Dropdown do Orçamento
  (function budgetDropdown() {
    dropdown.budgetButton.addEventListener('click', () => {
      if (!isBudgetCollapsed) {
        // Abre o dropdown do orçamento
        dropdown.collapseDropdown(dropdown.budget)
        isBudgetCollapsed = true;
      } else {
        // Fecha o dropdown do orcamento
        dropdown.hideDropdown(dropdown.budget)
        isBudgetCollapsed = false;
      }
    });
  })();

  // Dropdown do Estado
  (function stateDropdown() {
    dropdown.stateButton.addEventListener('click', () => {
      if (!isStateCollapsed) {
        // Abre o dropdown do orçamento
        dropdown.collapseDropdown(dropdown.state)
        isStateCollapsed = true;
      } else {
        // Fecha o dropdown do orcamento
        dropdown.hideDropdown(dropdown.state)
        isStateCollapsed = false;
      }
    });
  })();

})();
