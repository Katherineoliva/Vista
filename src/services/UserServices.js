import axios from "axios";

// Usa una variable de entorno para la URL base
const BASE_URL = import.meta.env.VITE_BASE_URL + '/user';

// Función para obtener el token desde localStorage
const getToken = () => {
  const tokenData = localStorage.getItem('token');
  if (!tokenData) {
    throw new Error("Token no encontrado en localStorage");
  }
  return JSON.parse(tokenData).token;
};

// Función para obtener los datos del usuario
export const GetUserData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/one`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}` // Incluye el token en el encabezado
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    throw error.response;
  }
};
