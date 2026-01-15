import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/authService";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await forgotPassword(email);
      navigate("/verify-otp", { state: { email } });
    } catch (err) {
      setError(
        err.response?.data?.detail || "Failed to send OTP. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Forgot Password</h2>

        <p style={{ color: "#ddd", textAlign: "center", marginBottom: "20px" }}>
          Enter your registered email to receive an OTP.
        </p>

        {error && (
          <p style={{ color: "#ff4d4d", textAlign: "center" }}>{error}</p>
        )}

        <form onSubmit={handleSendOTP}>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="login-btn" disabled={loading}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>

        <div className="login-footer">
          <span onClick={() => navigate("/")}>Back to Login</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
