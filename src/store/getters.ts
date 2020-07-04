import {GetterTree} from 'vuex';
import {AppState } from '../types/types';

const getters: GetterTree<AppState, AppState> = {
  currentView(state: AppState) {
    return state.currentView;
  }
};

export default getters;
