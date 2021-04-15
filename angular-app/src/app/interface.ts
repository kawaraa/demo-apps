export interface Todo {
  id: string;
  task: string;
  status: number;
  priority: number;
  timestamp: number;
}
export interface Link {
  path: string;
  text: string;
}