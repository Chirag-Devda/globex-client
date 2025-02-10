// For Authenticating user
export const loadUser = async () => {
  try {
    const response = await Axios.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Failed to loadUser");
  }
};
