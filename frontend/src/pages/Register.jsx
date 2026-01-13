/*import { useState } from "react";
import { register } from "../services/authService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("OPERATOR");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password, role);
      setMessage("Registration successful! You can now log in.");
      setError("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleRegister}>
        <input
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="form-select mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="OPERATOR">Operator</option>
          <option value="ANALYST">Analyst</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button className="btn btn-secondary">Register</button>
      </form>
    </div>
  );
};

export default Register; */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import "./Login.css"; // Using your existing CSS

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("OPERATOR");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password, role);
      setMessage("Registration successful!");
      setTimeout(() => navigate("/"), 2000); // Redirect to login after success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Create Account</h2>
        
        {message && <p style={{color: "#4ade80", textAlign: "center"}}>{message}</p>}
        {error && <p style={{color: "#ff4d4d", textAlign: "center"}}>{error}</p>}

        <form onSubmit={handleRegister}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <select 
            className="role-select" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            style={{
              width: "100%", padding: "15px", marginBottom: "22px",
              borderRadius: "8px", border: "none", background: "rgba(255, 255, 255, 0.15)",
              color: "#fff", fontSize: "16px"
            }}
          >
            <option value="OPERATOR" style={{color: "#000"}}>Operator</option>
            <option value="ANALYST" style={{color: "#000"}}>Analyst</option>
            <option value="ADMIN" style={{color: "#000"}}>Admin</option>
          </select>

          <button type="submit" className="login-btn">Register</button>
        </form>

        <div className="login-footer">
          <span onClick={() => navigate("/")}>Back to Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;