import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOTP } from "../services/authService";
import "./Login.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Session expired. Please try again.");
      setLoading(false);
      return;
    }

    try {
      await verifyOTP(email, otp, password);
      alert("Password reset successful. Please login.");
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.detail || "Invalid OTP or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Verify OTP</h2>

        {error && (
          <p style={{ color: "#ff4d4d", textAlign: "center" }}>{error}</p>
        )}

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

          <button className="login-btn" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="login-footer">
          <span onClick={() => navigate("/")}>Back to Login</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
