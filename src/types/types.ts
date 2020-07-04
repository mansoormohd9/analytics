export interface Department {
  id: number;
  name: string;
  description: string;
  aggregatedObjective: number;
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