<template>
  <div class="tile is-ancestor team" v-show="isTeamView">
    <div class="tile">
      <article class="tile is-child box">
        <p class="title">Objectives on Track
          <span class="custom-subtitle" v-on:click="setDepartmentView">All departments > </span>
          <span class="custom-subtitle-child">Product</span>
        </p>
        <div class="content">
          <TeamCard v-for="(team, index) in teams" :key="index" :team="team"></TeamCard>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TeamCard from "./TeamCard.vue";
const teamView = "team";
const departmentView = "department";

@Component({
  components: {
    TeamCard
  }
})
export default class Teams extends Vue{
  get teams() {
    return this.$store.getters.getTeams;
  }

  get isTeamView(){
    return this.$store.getters.currentView == teamView;
  }

  setDepartmentView() {
    this.$store.commit("setView", {view: departmentView, departmentId: 1});
  }
}
</script>

<style scoped>
.tile.team {
  margin: 50px;
}
span.custom-subtitle{
  color: cyan;
  font-size: large;
}
span.custom-subtitle-child{
  color: gray;
  font-size: large;
}
</style>