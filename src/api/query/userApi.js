import Axios from "../Axios";

// For Register User
export const RegisterUser = async (userData) => {
  try {
    const { data } = await Axios.post("/user/register", userData);
    return data;
  } catch (error) {
    console.error(
      "Sign-Up Failed:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Sign-Up Failed");
  }
};

// For Login User
export const LoginUser = async (userData) => {
  try {
    const response = await Axios.post("/user/login", userData);
    return response.data;
  } catch (error) {
    console.error(
      "Login Failed:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Login Failed");
  }
};
