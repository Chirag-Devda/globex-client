import Axios from "../../Axios";

export const loadUser = async () => {
  try {
    const response = await Axios.get("/auth/me");
    return response.data;
  } catch (error) {
    throw new Error(error.message || "Failed to load user data");
  }
};

// For Register User and Owner
export const RegisterRequest = async (data) => {
  try {
    const { fullname, email, password, role } = data;
    const response = await Axios.post(`/${role}/register`, {
      fullname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Sign-Up Failed:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Sign-Up Failed");
  }
};

// For Login User and Owner
export const LoginRequest = async (data) => {
  try {
    const { email, password, role } = data;
    const response = await Axios.post(`/${role}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error(
      "Login Failed:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Login Failed");
  }
};

// For Logout User and Owner
export const LogoutRequest = async () => {
  try {
    const response = await Axios.post("/user/logout");
    return response.data;
  } catch (error) {
    console.error(
      "Logout Failed:",
      error.response ? error.response.data : error.message
    );
    return { success: false, message: "Logout request failed." };
  }
};
