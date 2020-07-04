<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{team.name}}'s Team
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Team } from '../types/types'

@Component
export default class TeamCard extends Vue {
  @Prop({required: true}) team!: Team;
}
</script>

<style scoped>

</style>