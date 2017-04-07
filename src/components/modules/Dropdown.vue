<template>
  <nav class="md-dropdown-nav">
    <button class="md-dropdown-btn btn" @click="dropdownButton (); toggle(button)">
      {{ dropdownName }}
      <md-dropdown-arrow></md-dropdown-arrow>
    </button>

    <ul class="layout-vertical-list md-dropdown-list" v-bind:class="{ 'is-hidden': isHidden, 'is-collapsed': isCollapsed }">
      <li v-for="link of links" class="md-dropdown-list-item">
        <router-link v-bind:to="link.routePath" class="md-list-anchor" @click.native="getBudgetsFromStatus(link)">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: ['dropdownName', 'button', 'links', 'getBudgetsFromStatus'],
    data () {
      return {
        isHidden: true,
        isCollapsed: false,
        budgetBtn: false,
        stateBtn: false
      }
    },
    methods: {
      dropdownButton () {
        this.isHidden = !this.isHidden
        this.isCollapsed = !this.isCollapsed
      },
      // Voltar neste metodo quando implementar as funcionalidades principais do projeto
      toggle: function (button) {
        if (button === 1) {
          if (this.$data.budgetBtn) {
            this.$data.budgetBtn = false
          } else {
            this.$data.budgetBtn = true
            this.$data.stateBtn = false
          }
        } else if (button === 2) {
          if (this.$data.stateBtn) {
            this.$data.stateBtn = false
          } else {
            this.$data.stateBtn = true
            this.$data.budgetBtn = false
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  $primary-color: #f1f1f1;
  $secondary-color: rgba(0, 0, 0, .5);

  .layout-vertical-list {
    display: flex;
    flex-direction: column;
    width: 175px;

    & > .md-dropdown-list-item {
      display: flex;
      align-items: center;
      height: 45px;
      overflow: hidden;
    }

    @media (max-width: 680px) {
      width: 140px;
    }

    @media (max-width: 600px) {
      width: 100%;

      & > .md-dropdown-list-item, .md-list-anchor {
        justify-content: center;
        text-align: center;
        font-size: 18px;
      }
    }
  }

  .md-dropdown-nav {
    position: relative;

    &:last-of-type {
      .layout-vertical-list {
        width: 140px;
      }
    }

    @media (max-width: 680px) {
      &:last-of-type {
        .layout-vertical-list {
          width: 110px;
        }
      }
    }

    @media (max-width: 600px) {
      width: 100%;
      padding: 0 15px;

      &:last-of-type {
        .layout-vertical-list {
          width: 100%;
        }
      }

      & > .md-dropdown-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 22px;
        height: 45px;
      }

      &:first-of-type {
        .md-dropdown-list {
          top: 125px;
        }
      }

      &:last-of-type {
        .md-dropdown-list {
          top: 70px;
        }
      }
    }
  }

  .md-dropdown-list {
    background-color: rgba(0,0,0, .6);
    position: absolute;
    top: 79px;
    left: 0;
    z-index: 100;
  }

  .md-dropdown-list-item {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    transition: background-color .3s ease;
    height: 35px;

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, .4);
    }

    &:active {
      background-color: #26a69a;
    }
  }

  .md-list-anchor {
    width: 100%;
    padding-left: 15px;
    background: none;
    border: none;
    text-align: left;
    height: 35px;
    display: flex;
    align-items: center;
    transition: .3s ease;
  }

  .md-dropdown-btn.btn {
    display: flex;
    align-items: center;
    .md-dropdown-arrow {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      path {
        fill: $primary-color;
      }
    }

    @media (max-width: 680px) {
      padding: 0 15px;
    }

    @media (max-width: 600px) {
      width: 100%;
      text-align: center;
      justify-content: center;
      margin: 15px 0;
    }
  }
</style>
