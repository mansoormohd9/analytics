<template>
  <div class="card team-card" :style="{ 'background-color': randomColor}">
    <div class="card-content">
      <div class="content">
        {{team.name}}'s Team
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { randomColor } from "../utils/utils";
import { Team } from '../types/types'

@Component
export default class TeamCard extends Vue {
  @Prop({required: true}) team!: Team;

  get randomColor() {
    return randomColor();
  }
}
</script>

<style scoped>
.card.team-card {
  width: 300px;
  height: 200px;
}
</style>