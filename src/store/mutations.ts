import {MutationTree} from 'vuex';
import { AppState } from '../types/types';

const mutations: MutationTree<AppState> = {
  setView(state: AppState, view: string) {
    state.currentView = view;
  }
};

export default mutations;
