export default function LoginPage({
  loginPass,
  setLoginPass,
  handleLogin,
  loginErr,
}) {
  return (
    <div className="login-screen">
      <div className="login-box">
        <div className="login-logo">IBZA'S</div>
        <div className="login-sub">Admin Portal</div>

        <div className="form-group" style={{ textAlign: "left" }}>
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Enter admin password"
          />
        </div>

        {loginErr && <div className="login-error">{loginErr}</div>}

        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: 24 }}
          onClick={handleLogin}
        >
          Access Dashboard
        </button>
      </div>
    </div>
  );
}
