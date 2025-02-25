const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchClient = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}/${url}`, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
