const Dashboard = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>

      {role === "operator" && (
        <div className="card p-3 mt-3">
          <h3>Operator Panel</h3>
          <p>Active Vessels: 12</p>
          <p>Pending Tasks: 5</p>
        </div>
      )}

      {role === "analyst" && (
        <div className="card p-3 mt-3">
          <h3>Analyst Panel</h3>
          <p>Reports Generated: 8</p>
          <p>Alerts: 3</p>
        </div>
      )}

      {role === "admin" && (
        <div className="card p-3 mt-3">
          <h3>Admin Panel</h3>
          <p>Total Users: 25</p>
          <p>System Status: OK</p>
        </div>
      )}

      {!role && <p>Please login first.</p>}
    </div>
  );
};

export default Dashboard;