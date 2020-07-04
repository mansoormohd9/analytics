<template>
  <div class="tile is-ancestor main-title">
    <div class="tile">
      <article class="tile is-child box">
        <p class="title">Objectives on Track</p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Title extends Vue{

}
</script>

<style scoped>
.tile.main-title {
  width: 350px;
  margin: 50px;
  height: 200px;
}
</style>