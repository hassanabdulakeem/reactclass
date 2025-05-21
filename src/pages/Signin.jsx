import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signingIn, setSigningIn] = useState(false);
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
    setSigningIn(true);

    try {
      const response = await fetch(`${baseUrl}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is successful (status 200-299)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: "Invalid email or password",
        }));
        throw new Error(errorData.message || "Sign-in failed");
      }

      const data = await response.json();

      if (data.status === "success") {
        toast.success(data.message);
        navigate("/dashboard"); // Ensure correct path (no extra spaces)
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error(error.message || "Failed to connect to the server");
    } finally {
      setSigningIn(false);
    }
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
      </form>
    </div>
  );
};

export default Signin;