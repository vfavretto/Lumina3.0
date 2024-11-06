import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  async register(req, res) {
    const { fullName, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ fullName, email, password: hashedPassword });
      await user.save();

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(201).json({ user, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async checkAuth(req, res) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
  }

  async getUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const updates = req.body;

    try {
      const user = await User.findByIdAndUpdate(id, updates, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(204).json();
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new UserController();
