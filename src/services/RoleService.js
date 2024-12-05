import axios from "axios";

// Usa una variable de entorno para configurar la URL base
const BASE_URL = import.meta.env.VITE_BASE_URL + '/role';

// Obtiene el token almacenado en localStorage
const getToken = () => {
  const tokenData = localStorage.getItem('token');
  if (!tokenData) {
    throw new Error("Token no encontrado en localStorage");
  }
  return JSON.parse(tokenData).token;
};

// Función para obtener los roles
export const GetRoles = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/roles`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}` // Incluye el token en el encabezado
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error al obtener roles:", error);
    throw error.response;
  }
};
