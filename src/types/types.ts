export interface AppState {
  departments: Array<Department>;
  teams: Array<Team>;
  currentView: string;
  currentDepartmentId: number;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  aggregatedObjective: number;
  objectives: number;
  employees: number;
}

export interface Team {
  id: number;
  name: string;
  departmentId: number;
}

export interface Employee {
  id: number;
  name: string;
  teamId: number;
}