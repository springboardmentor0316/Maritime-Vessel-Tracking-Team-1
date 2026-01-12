import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    // mock OTP verification
    if (otp === "123456") {
      alert("Password reset successful!");
      navigate("/login");
    } else {
      alert("Invalid OTP (use 123456)");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Verify OTP</h2>

        <form onSubmit={handleReset}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
