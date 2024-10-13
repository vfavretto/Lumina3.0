class UserModel {
    constructor(fullName, email, password) {
      this.fullName = fullName;
      this.email = email;
      this.password = password;
    }
  
    validate() {
        const errors = [];

        if (!this.fullName || this.fullName.trim().length === 0) {
          errors.push("Full name is required");
        }
    
        if (!this.email || !this.isValidEmail(this.email)) {
          errors.push("Valid email is required");
        }
    
        if (!this.password || this.password.length < 8) {
          errors.push("Password must be at least 8 characters long");
        }
    
        return errors;
      }
    
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
  }
  
  export default UserModel;