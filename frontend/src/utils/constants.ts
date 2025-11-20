const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const api = {
  createTask: `${BASE_URL}/task/create`,
  getTasks: `${BASE_URL}/task/all`,
  getTask: `${BASE_URL}/task/single`,
  editTask: `${BASE_URL}/task/edit`,
  toggleCompletion: `${BASE_URL}/task/toggle/complete`,
  deleteTask: `${BASE_URL}/task/delete`,
};
