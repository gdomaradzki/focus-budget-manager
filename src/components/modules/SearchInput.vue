<template>
  <form class="layout-search-form" action="/orcamentos/pesquisar" method="get">
    <input class="module-search-input" type="text" placeholder="Pesquisar" name="form-search">
    <button class="module-search-btn btn">
      <svg x="0px" y="0px" width="512px" height="512px" viewBox="0 0 485.213 485.213">
        <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z" fill="#FFFFFF"/>
        <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" fill="#FFFFFF"/>
      </svg>
    </button>
  </form>
</template>

<script>
  export default {
    name: 'SearchInput'
  }
</script>

<style lang="scss" scoped>
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);
  .layout-search-form {
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      width: 100%;
      padding: 0 15px;
    }
  }

  input[type=text].module-search-input {
    margin: 0;
    height: 35px;
    background-color: darken($secondary-color, 30%);
    padding: 0 15px;
    border: 1px solid #9e9e9e;
    border-right: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;

    &:focus {
      border: 1px solid #26a69a;
      border-right: none;
    }

    @media (max-width: 600px) {
      width: 100%;
      text-align: center;
      justify-content: center;
      margin: 15px 0;
    }
  }

  // Search Button
  .module-search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
</style>
