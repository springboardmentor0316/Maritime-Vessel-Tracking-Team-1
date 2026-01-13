/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();

    // mock OTP send
    localStorage.setItem("resetEmail", email);
    alert("OTP sent to your email (mock)");
    navigate("/verify-otp");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Forgot Password</h2>

        <form onSubmit={handleSendOTP}>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="login-btn">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword; */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    localStorage.setItem("resetEmail", email);
    alert("OTP sent to your email (mock)");
    navigate("/verify-otp");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Forgot Password</h2>
        <p style={{color: "#ddd", textAlign: "center", marginBottom: "20px"}}>
          Enter your email to receive an OTP code.
        </p>

        <form onSubmit={handleSendOTP}>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="login-btn">Send OTP</button>
        </form>

        <div className="login-footer">
          <span onClick={() => navigate("/")}>Back to Login</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
