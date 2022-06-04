const API = "http://192.168.1.13:3000/task";
export const getTask = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const saveTask = async (newTask) => {
  const response = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  return await response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {},
  });
};

export const obtenerTarea = async (id) => {
  const response = await fetch(`${API}/${id}`);
  return await response.json();
};

export const updateTask = async (id, newTask) => {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { Accept: "application/json", "content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  return response;
};
