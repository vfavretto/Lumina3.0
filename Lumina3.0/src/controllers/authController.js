import UserModel from '../models/userModel';
import { login, register, isAuthenticated } from '../services/authService';

class AuthController {
  async login(name, email, password) {
    try {
      const result = await login(name, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async register(fullName, email, password) {
    try {
      const user = new UserModel(fullName, email, password);
      const validationErrors = user.validate();
      
      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(", "));
      }
      
      const result = await register(fullName, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  isAuthenticated() {
    return isAuthenticated();
  }
}

export default new AuthController();