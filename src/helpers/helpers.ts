import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.VITE_dummy_todos_url as string;

type actionType = 'get' | 'post' | 'put' | 'delete';

type SuccessResponseType<T> = [T, null];
type ErrorResponseType = [null, Error];

type ApiDataResponseType<T> = Promise<SuccessResponseType<T> | ErrorResponseType>;

export const apiData = <T>(
  url: string,
  action: actionType = 'get',
  dataToSend: any = {},
): ApiDataResponseType<T> => {
  return axios[action](url, dataToSend)
    .then((response) => {
      return [response.data, null] as [T, null];
    })
    .catch((error: Error) => {
      return [null, error] as [null, Error];
    });
};
