import api from "@/lib/api";

export const getTasks = () => api.get("/tasks");
export const createTask = (task) => api.post("/tasks", { task });
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
export const updateTask = (id, data) => api.patch(`/tasks/${id}`, data);