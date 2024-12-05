import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getTarjetasAcep = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/emprendimientos`);
    // Filtrar solo los emprendimientos con estado "aceptado"
    const aceptados = response.data.filter(emprendimiento => emprendimiento.estado === "aceptado");
    return aceptados;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
};

export const getTarjetasPend = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/emprendimientos`);
    // Filtrar solo los emprendimientos con estado "pendiente"
    const pendientes = response.data.filter(emprendimiento => emprendimiento.estado === "pendiente");
    return pendientes;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
};

export const getTarjeta = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/emprendimientos`);
    return response.data.find((tarjeta) => tarjeta.id === id);
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
};
