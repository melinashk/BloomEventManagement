import axios from "axios";

const baseURL = "http://localhost:8000/auth";

 // type definition
 type FormValues = {
  email: string,
  password: string,
  remember: boolean,
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (logindata: FormValues) => {
  try {
    const response = await api.post("/login", logindata, { withCredentials: true});
    if (response.status === 201) {
      return response.data
    }
  } catch (error) {
    return error
  }
};

export default api;