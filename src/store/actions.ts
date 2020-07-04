import {ActionTree, ActionContext} from 'vuex';
import {AppState} from '../types/types';
import departmentsData from "../utils/jsons/departments-data.json";

const actions: ActionTree<AppState, AppState> = {
  async initialize({commit}: ActionContext<AppState, AppState>) {
    const departments = departmentsData;
    commit("setDepartments", departments);
  }
};

export default actions;