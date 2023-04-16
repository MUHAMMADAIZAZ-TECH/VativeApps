import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/items/";
export const getProduct = async (id) => {
  const response = await axios.get(`get/${id}`);
  return response;
};
export const getProducts = async () => {
  const response = await axios.get(`get`);
  return response;
};
export const addProducts = async (state) => {
  const response = await axios.post(`add`, { state });
  return response;
};
export const deleteProducts = async (id) => {
  const response = await axios.delete(`delete/${id}`);
  return response;
};
export const updateProducts = async (state) => {
  const response = await axios.put(`update/${state.id}`, { state });
  return response;
};
