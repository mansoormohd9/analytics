<template>
  <div class="container">
    <Title></Title>
    <Departments></Departments>
    <Teams></Teams>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from './components/Title.vue';
import Departments from './components/Departments.vue';
import Teams from './components/Teams.vue';

@Component({
  components: {
    Title,
    Departments,
    Teams
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
