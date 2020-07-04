<template>
  <div class="card">
    <div class="card-content">
      <div class="content" v-on:click="setTeamView">
        {{department.name}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component , Prop} from 'vue-property-decorator'
import { Department } from '../types/types';
const teamView = "team";

@Component
export default class DepartmentCard extends Vue {
  @Prop({required: true}) department!: Department;  

  setTeamView(){
    this.$store.commit("setView", {view: teamView, departmentId: this.department.id});
  }
}
</script>

<style scoped>

</style>