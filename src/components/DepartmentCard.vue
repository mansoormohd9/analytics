<template>
  <div class="card department-card" :style="{'width': cardWidth, 'height': cardHeight, 'background-color': randomColor }">
    <b-tooltip
          :label="toolTipDescription"
          position="is-bottom"
          size="is-large"
          multilined>
      <div class="card-content">
          <div class="content department-name" v-on:click="setTeamView">
            <p>{{department.name}}</p>
          </div>
      </div>
    </b-tooltip>
  </div>
</template>

<script lang="ts">
import { Vue, Component , Prop} from 'vue-property-decorator'
import { Department } from '../types/types';
import { randomColor } from "../utils/utils";
const teamView = "team";

@Component
export default class DepartmentCard extends Vue {
  @Prop({required: true}) department!: Department;
  
  get cardWidth() {
    return (this.department.objectives+5) + "%";
  }

  get cardHeight() {
    let objectives = this.department.objectives;
    objectives = objectives >= 40 ? 40 : 
                  (objectives > 10 ? 30 : 10);
    return objectives * 10 + "px";
  }

  setTeamView(){
    this.$store.commit("setView", {view: teamView, departmentId: this.department.id});
  }

  get toolTipDescription() {
    return this.department.description + " | Objectives " + this.department.objectives + " | Employees " + this.department.employees;
  }

  get randomColor() {
    return randomColor();
  }
}
</script>

<style scoped>
.card.department-card {
  float: left;
}
.content.department-name {
  text-align: center;
}
</style>