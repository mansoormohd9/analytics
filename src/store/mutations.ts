import {MutationTree} from 'vuex';
import { AppState, Department } from '../types/types';

const mutations: MutationTree<AppState> = {
  setDepartments(state: AppState, departments: Array<Department>) {
    state.departments = departments;
  },
  setView(state: AppState, view: string) {
    state.currentView = view;
  }
};

export default mutations;
