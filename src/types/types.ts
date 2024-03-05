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

const apiResponse = {
  todos: [
    {
      id: 1,
      todo: 'Do something nice for someone I care about',
      completed: true,
      userId: 26,
    },
  ],
  total: 150,
  skip: 0,
  limit: 30,
};
