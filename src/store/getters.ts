import {GetterTree} from 'vuex';
import {AppState } from '../types/types';

const getters: GetterTree<AppState, AppState> = {
  currentView(state: AppState) {
    return state.currentView;
  },
  getDepartments(state: AppState) {
    return state.departments;
  }
};

export default getters;
