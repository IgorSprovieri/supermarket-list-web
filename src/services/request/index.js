import { api } from "../api";

export const getList = async () => {
  try {
    const result = await api.get("/items");
    return result.data;
  } catch (error) {
    alert("Erro ao buscar dados da API");
    return { error };
  }
};

export const updateList = async (id, item) => {
  try {
    const result = await api.put(`/item/${id}`, {
      ...item,
    });
    return result.data;
  } catch (error) {
    alert("Erro ao atualizar dados da API");
    return { error };
  }
};
