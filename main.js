// Importing CSS
import css from './src/assets/scss/app.scss';

// Import modules
const Dropdown = require('./src/modules/dropdowns.js');
const Screensize = require('./src/modules/screensize.js');

(function dropdownHandler() {
  let isBudgetCollapsed = false;
  let isStateCollapsed = false;
  const dropdown = new Dropdown();
  const screensize = new Screensize();

  dropdown.setDropdowns();
  dropdown.setButtons();
  screensize.widthChecker();

  // Dropdown do Orçamento
  (function budgetDropdown() {
    if (screensize.width > 600) {
      dropdownHighres(dropdown.budget, dropdown.budgetButton, isBudgetCollapsed);
    } else {
      dropdownValidator(dropdown.budget, dropdown.state, dropdown.budgetButton,
                        dropdown.stateButton, isBudgetCollapsed, isStateCollapsed)
    }
  })();

  // Dropdown do Estado
  (function stateDropdown() {
    if (screensize.width > 600) {
      dropdownHighres(dropdown.state, dropdown.stateButton, isStateCollapsed);
    } else {
      dropdownValidator(dropdown.state, dropdown.budget, dropdown.stateButton,
                        dropdown.budgetButton, isStateCollapsed, isBudgetCollapsed);
    }
  })();

  // Click events para dropdowns quando a resolução for > 600px
  function dropdownHighres(chosenDropdown, chosenDropdownButton, chosenDropdownCollapsed) {
    chosenDropdownButton.addEventListener('click', () => {
      if (!chosenDropdownCollapsed) {
        // Abre o dropdown do orçamento
        dropdown.collapseDropdown(chosenDropdown)
        chosenDropdownCollapsed = true;
      } else {
        // Fecha o dropdown do orcamento
        dropdown.hideDropdown(chosenDropdown)
        chosenDropdownCollapsed = false;
      }
    });
  }

  // Fecha o dropdown anterior se outro for aberto, caso a resolução seja < 600px
  // Refatorar esta função, está muito complexa, poderia ser mais simples e ter melhor perfomace
  function dropdownValidator(firstChosenDropdown, secondChosenDropdown, firstChosenDropdownButton,
                              secondChosenDropdownButton, firstChosenDropdownCollapsed, secondChosenDropdownCollapsed) {
    firstChosenDropdownButton.addEventListener('click', () => {
      if (!firstChosenDropdownCollapsed) {
        secondChosenDropdownCollapsed = false;
        firstChosenDropdownCollapsed = true;
        dropdown.hideDropdown(secondChosenDropdown);
        dropdown.collapseDropdown(firstChosenDropdown);
      } else {
        dropdown.hideDropdown(firstChosenDropdown);
        firstChosenDropdownCollapsed = false;
      }
    })

    secondChosenDropdownButton.addEventListener('click', () => {
      if (!secondChosenDropdownCollapsed) {
        firstChosenDropdownCollapsed = false;
        secondChosenDropdownCollapsed = true;
        dropdown.hideDropdown(firstChosenDropdown);
        dropdown.collapseDropdown(secondChosenDropdown);
      } else {
        dropdown.hideDropdown(secondChosenDropdown);
        secondChosenDropdownCollapsed = false;
      }
    })
  }

})();

// dropdown.budgetButton.addEventListener('click', () => {
//   if (!isBudgetCollapsed) {
//     // Abre o dropdown do orçamento
//     dropdown.collapseDropdown(dropdown.budget)
//     isBudgetCollapsed = true;
//   } else {
//     // Fecha o dropdown do orcamento
//     dropdown.hideDropdown(dropdown.budget)
//     isBudgetCollapsed = false;
//   }
// });
