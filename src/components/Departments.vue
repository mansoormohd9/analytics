<template>
  <div class="tile is-ancestor department" v-show="isDepartmentView">
    <div class="tile">
      <article class="tile is-child box">
        <p class="title">Objectives on Track</p>
        <p class="custom-subtitle">All departments</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
const departmentView = "department";
const teamView = "team";

@Component
export default class Departments extends Vue{  
  get isDepartmentView(){
    return this.$store.getters.currentView == departmentView;
  }

  setTeamView(){
    this.$store.commit("setView", teamView);
  }
}
</script>

<style scoped>
.tile.department {
  margin: 50px;
}
p.custom-subtitle{
  color: grey;
}
</style>