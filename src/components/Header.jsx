import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated } = useContext(authContext);
  const isAuth = isAuthenticated();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <h1 style={styles.logo}>Logo</h1>

        {/* Navigation Links */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About</Link>
          <Link to="/contact" style={styles.navLink}>Contact us</Link>
          <Link to="/products" style={styles.navLink}>Products</Link>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          <Link to="/TodoApp" style={styles.navLink}>TodoApp</Link>
        </nav>

        {/* Auth Buttons */}
        <div style={styles.authButtons}>
          {isAuth ? (
            <>
              <Button text="Explore" style={styles.exploreButton} />
              <button 
                onClick={logout}
                style={styles.logoutButton}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/signin" 
                style={styles.signInButton}
              >
                Sign in
              </Link>
              <Link 
                to="/signup" 
                style={styles.signUpButton}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Styles object
const styles = {
  header: {
    backgroundColor: "#f3f4f6",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "0.5rem 0",
    width: "100%"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    flexWrap: "wrap"
  },
  logo: {
    color: "#ef4444",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0.5rem 0"
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0.5rem 0"
  },
  navLink: {
    color: "#374151",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "0.25rem 0",
    transition: "color 0.2s ease",
    borderBottom: "2px solid transparent"
  },
  authButtons: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "center",
    margin: "0.5rem 0"
  },
  exploreButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500"
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500"
  },
  signInButton: {
    border: "1px solid #9ca3af",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    color: "#374151",
    textDecoration: "none",
    fontSize: "0.875rem",
    transition: "background-color 0.2s ease"
  },
  signUpButton: {
    border: "1px solid #9ca3af",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    color: "#374151",
    textDecoration: "none",
    fontSize: "0.875rem",
    transition: "background-color 0.2s ease"
  }
};

export default Header;