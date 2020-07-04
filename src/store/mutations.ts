import {MutationTree} from 'vuex';
import { AppState, Department, Team } from '../types/types';

const mutations: MutationTree<AppState> = {
  setDepartments(state: AppState, departments: Array<Department>) {
    state.departments = departments;
  },
  setTeams(state: AppState, teams: Array<Team>) {
    state.teams = teams;
  },
  setView(state: AppState, {view, departmentId}) {
    state.currentView = view;
    state.currentDepartmentId = departmentId;
  }
};

export default mutations;
