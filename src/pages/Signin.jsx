import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authContext } from "../contexts/AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {signingIn,signin,} = useContext(authContext)
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    signin(formData)

    
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="joe@example.com"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInput}
            required
          />
        </div>

        <button type="submit" disabled={signingIn}>
          {signingIn ? "Signing in..." : "Sign In"}
        </button>
        <a href="./ForgetPassword.jsx">forgotten password</a>
      </form>
    </div>
  );
};

export default Signin;