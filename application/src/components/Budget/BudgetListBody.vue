<template>
  <section class="l-budget-body">
    <div class="md-budget">
      <div class="md-budget-info white--text">Client name</div>
      <div class="md-budget-info white--text">Budget title</div>
      <div class="md-budget-info white--text">Budget state</div>
      <div class="l-budget-actions">
        <v-btn small flat color="light-blue lighten-1">
          <v-icon small>visibility</v-icon>
        </v-btn>
        <v-btn small flat color="yellow accent-1">
          <v-icon>mode_edit</v-icon>
        </v-btn>
        <v-btn small flat color="red lighten-1">
          <v-icon>delete_forever</v-icon>
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import "./../../assets/styles";

  .l-budget-body {
    display: flex;
    flex-direction: column;

    .md-budget {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media (min-width: 960px) {
        flex-direction: row;
      }

      .md-budget-info {
        flex-basis: 25%;
        width: 100%;
        background-color: rgba(0, 175, 255, 0.45);
        border: 1px solid $border-color-input;
        padding: 0 15px;
        display: flex;
        height: 35px;
        align-items: center;
        justify-content: center;

        @media (min-width: 601px) {
          justify-content: flex-start;
        }
      }

      .l-budget-actions {
        flex-basis: 25%;
        display: flex;
        background-color: rgba(0, 175, 255, 0.45);
        border: 1px solid $border-color-input;
        align-items: center;
        justify-content: center;

        .btn {
          min-width: 45px !important;
          margin: 0 5px !important;
        }
      }
    }
  }
</style>
