import {GetterTree} from 'vuex';
import {AppState } from '../types/types';

const getters: GetterTree<AppState, AppState> = {
  currentView(state: AppState) {
    return state.currentView;
  },
  getDepartments(state: AppState) {
    return state.departments;
  },
  getTeams(state: AppState) {
    return state.teams.filter(team => team.departmentId == state.currentDepartmentId);
  }
};

export default getters;
