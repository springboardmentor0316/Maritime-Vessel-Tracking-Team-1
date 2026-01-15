import axios from "axios";

export const login = async (email, password) => {
  const response = await axios.post("/api/token/", {
    email,
    password,
  });

  const { access, refresh } = response.data;
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const register = async (username, email, password, role = "OPERATOR") => {
  const response = await axios.post("/api/accounts/register/", {
    username,
    email,
    password,
    role,
  });
  return response.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("access_token");
  const response = await axios.get("/api/accounts/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const forgotPassword = async (email) => {
  const res = await axios.post("/api/accounts/forgot-password/", { email });
  return res.data;
};

export const verifyOTP = async (email, otp, newPassword) => {
  const res = await axios.post("/api/accounts/verify-otp/", {
    email,
    otp,
    new_password: newPassword,
  });
  return res.data;
};

