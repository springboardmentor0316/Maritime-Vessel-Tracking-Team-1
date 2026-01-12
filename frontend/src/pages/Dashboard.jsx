import { useState, useEffect } from "react";
import { getProfile } from "../services/authService";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const token = localStorage.getItem("access_token");
    if (token) {
      fetchProfile();
    } else {
      setError("Please login first.");
    }
  }, []);

  if (error) {
    return (
      <div className="container mt-4">
        <h1>Dashboard</h1>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container mt-4">
        <h1>Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <p>Welcome, {profile.username}!</p>

      {profile.role === "OPERATOR" && (
        <div className="card p-3 mt-3">
          <h3>Operator Panel</h3>
          <p>Active Vessels: 12</p>
          <p>Pending Tasks: 5</p>
        </div>
      )}

      {profile.role === "ANALYST" && (
        <div className="card p-3 mt-3">
          <h3>Analyst Panel</h3>
          <p>Reports Generated: 8</p>
          <p>Alerts: 3</p>
        </div>
      )}

      {profile.role === "ADMIN" && (
        <div className="card p-3 mt-3">
          <h3>Admin Panel</h3>
          <p>Total Users: 25</p>
          <p>System Status: OK</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;