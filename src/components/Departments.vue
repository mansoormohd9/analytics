<template>
  <div class="tile is-ancestor department" v-show="isDepartmentView">
    <div class="tile">
      <article class="tile is-child box">
        <p class="title">Objectives on Track <span class="custom-subtitle">All departments</span></p>
        <div class="content">
          <DepartmentCard v-for="(department, index) in departments" :key="index" :department="department"></DepartmentCard>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DepartmentCard from "./DepartmentCard.vue";
const departmentView = "department";

@Component({
  components: {
    DepartmentCard
  }
})
export default class Departments extends Vue{
  get departments() {
    return this.$store.getters.getDepartments;
  }

  get isDepartmentView(){
    return this.$store.getters.currentView == departmentView;
  }
}
</script>

<style scoped>
.tile.department {
  margin: 50px;
}
span.custom-subtitle{
  font-size: large;
  color: grey;
}
</style>