import { useState } from "react";

import { AuthContext } from "./AuthContext";
import { serverPath } from "../settings";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const login = async ({ email, password }) => {
    const response = await fetch(`${serverPath}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Forkert email eller adgangskode");
    }

    const data = await response.json();
    const newToken = data?.data.token;

    if (!newToken) {
      throw new Error("Ingen token modtaget fra serveren");
    }

    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isLoggedIn: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
