const Register = () => {
  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form>
        <input
          className="form-control mb-3"
          placeholder="Username"
        />
        <input
          className="form-control mb-3"
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-secondary">Register</button>
      </form>
    </div>
  );
};

export default Register;