<template>
  <section class="l-list-body">
    <div class="md-list-item"
         v-if="data != null"
         v-for="item in data">

         <div class="md-info white--text" v-for="info in item" v-if="info != item._id">
           {{ info }}
         </div>

        <div class="l-actions">
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
  export default {
    props: ['data']
  }
</script>

<style lang="scss">
  @import "./../../assets/styles";

  .l-list-body {
    display: flex;
    flex-direction: column;

    .md-list-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 15px 0;

      @media (min-width: 960px) {
        flex-direction: row;
        margin: 0;
      }

      .md-info {
        flex-basis: 25%;
        width: 100%;
        background-color: rgba(0, 175, 255, 0.45);
        border: 1px solid $border-color-input;
        padding: 0 15px;
        display: flex;
        height: 35px;
        align-items: center;
        justify-content: center;

        &:first-of-type, &:nth-of-type(2) {
          text-transform: capitalize;
        }

        &:nth-of-type(3) {
          text-transform: uppercase;
        }

        @media (min-width: 601px) {
          justify-content: flex-start;
        }
      }

      .l-actions {
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
