import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import authController from '../controllers/authController';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsAuth(authController.isAuthenticated());
  }, []);

  const handleLogin = async (name, email, password) => {
    try {
      await authController.login(name, email, password);
      setIsAuth(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const handleRegister = async (fullName, email, password) => {
    try {
      await authController.register(fullName, email, password);
      setIsAuth(true);
      setError(null);
    } catch (error) {
      setError(error.message);
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