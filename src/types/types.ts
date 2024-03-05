export type ApiResponseType = {
  todos: TodoType[];
  total: number;
  skip: number;
  limit: number;
};

export type TodoType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
