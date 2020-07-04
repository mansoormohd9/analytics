<template>
  <div class="tile is-ancestor team" v-show="isTeamView">
    <div class="tile">
      <article class="tile is-child box">
        <p class="title">Objectives on Track</p>
        <p class="custom-subtitle" v-on:click="setDepartmentView">All departments ></p>
        <p class="custom-subtitle-child">Product</p>
        <div class="content">
          asdasdasdasd
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
const teamView = "team";
const departmentView = "department";

@Component
export default class Teams extends Vue{  
  get isTeamView(){
    return this.$store.getters.currentView == teamView;
  }

  setDepartmentView(){
    this.$store.commit("setView", departmentView);
  }
}
</script>

<style scoped>
.tile.team {
  margin: 50px;
}
p.custom-subtitle{
  color: cyan;
}
p.custom-subtitle-child{
  color: gray;
}
</style>