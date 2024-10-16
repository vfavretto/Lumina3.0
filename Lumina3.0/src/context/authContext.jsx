import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuth(true);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setIsAuth(true);
      setError(null);

      return response.data;
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro ao se conectar ao servidor.");
      }
      throw error;
    }
  };

  const handleRegister = async (fullName, email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          fullName,
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setIsAuth(true);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Erro ao se conectar ao servidor.");
      }
      throw error;
    }
  };

  const value = {
    isAuth,
    error,
    handleLogin,
    handleRegister,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
