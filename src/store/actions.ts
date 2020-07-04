import {ActionTree, ActionContext} from 'vuex';
import {AppState} from '../types/types';
import departmentsData from "../utils/jsons/departments-data.json";
import teamsData from "../utils/jsons/teams-data.json";

const actions: ActionTree<AppState, AppState> = {
  async initialize({commit}: ActionContext<AppState, AppState>) {
    const departments = departmentsData;
    const teams = teamsData;
    commit("setDepartments", departments);
    commit("setTeams", teams);
  }
};

export default actions;