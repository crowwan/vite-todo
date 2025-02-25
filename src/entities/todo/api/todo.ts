import { fetchClient } from '@shared/api/apiClient';

export const getTodos = async () => {
  return fetchClient('todos');
};
