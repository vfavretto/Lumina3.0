import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired

};

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;