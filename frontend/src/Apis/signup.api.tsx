import axios from "axios";

const baseURL = "http://localhost:8000/user";

// type definition
type FormValues = {
  role: string,
  name: string,
  email: string,
  gender: string,
  phoneNumber: string,
  password: string,
  confirmPassword: string,
  termsAndConditions: boolean
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signup = async (userData: FormValues) => {
  try {
    const response = await api.post("/signup", userData);
    return response.data;
  } catch (error) {
    return error
  }
};

export default api;