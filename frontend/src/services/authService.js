// Mock Authentication Service (Week 1)

export const login = async (role) => {
  if (!role) {
    throw new Error("Role is required");
  }

  // simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "mock-jwt-token",
        role: role,
      });
    }, 500);
  });
};

export const register = async (username, email, password) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required");
  }

  // simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Registration successful",
      });
    }, 500);
  });
};
