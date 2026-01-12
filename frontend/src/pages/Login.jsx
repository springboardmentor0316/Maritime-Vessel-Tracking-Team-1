import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  // login fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register fields
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // mock login
    localStorage.setItem("user", email);
    navigate("/dashboard");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // mock register
    alert("Registered successfully! Now login.");
    setIsLogin(true);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>{isLogin ? "Maritime Portal Login" : "Create Account"}</h2>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

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

          <button type="submit" className="login-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="login-footer">
          {isLogin ? (
            <>
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
              <span
                className="forgot"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </span>

            </>
          ) : (
            <span onClick={() => setIsLogin(true)}>Back to Login</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
