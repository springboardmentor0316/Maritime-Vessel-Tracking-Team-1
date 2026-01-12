import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("operator");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("role", role); // mock login
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <select
          className="form-select mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="operator">Operator</option>
          <option value="analyst">Analyst</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;