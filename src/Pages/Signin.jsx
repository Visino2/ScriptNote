import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ after login logic, go to Dashboard
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background: "#F3E61D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "32px",
            width: "200px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          }}
        >
          {/* Replace with your logo */}
          <span style={{ fontSize: "48px" }}>📝</span>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "10px",
              letterSpacing: "2px",
            }}
          >
            SCRIPTORIA
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Welcome back to Scriptoria
          </h2>
          <p
            style={{
              color: "#444",
              marginBottom: "24px",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            Please enter your details to sign in your account!
          </p>

          {/* Google button */}
          <button
            type="button"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              border: "1px solid #ddd",
              borderRadius: "24px",
              padding: "10px 0",
              background: "#fff",
              marginBottom: "12px",
              cursor: "pointer",
            }}
          >
            <img src="google.png" alt="Google" style={{ width: "22px" }} />
            Sign in with Google
          </button>

          {/* Apple button */}
          <button
            type="button"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              border: "1px solid #ddd",
              borderRadius: "24px",
              padding: "10px 0",
              background: "#fff",
              marginBottom: "24px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              style={{ width: "22px" }}
            />
            Sign in with Apple
          </button>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              margin: "16px 0",
            }}
          >
            <hr
              style={{ flex: 1, border: "none", borderTop: "1px solid #aaa" }}
            />
            <span
              style={{
                margin: "0 10px",
                color: "#444",
                fontSize: "14px",
              }}
            >
              Or sign in with
            </span>
            <hr
              style={{ flex: 1, border: "none", borderTop: "1px solid #aaa" }}
            />
          </div>

          {/* Email */}
          <div style={{ width: "100%", marginBottom: "16px" }}>
            <label
              htmlFor="email"
              style={{ fontWeight: "500", fontSize: "15px" }}
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #222",
                borderRadius: "8px",
                marginTop: "6px",
                fontSize: "15px",
              }}
              required
            />
          </div>

          {/* Password */}
          <div style={{ width: "100%", marginBottom: "18px" }}>
            <label
              htmlFor="password"
              style={{ fontWeight: "500", fontSize: "15px" }}
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #222",
                borderRadius: "8px",
                marginTop: "6px",
                fontSize: "15px",
              }}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#F3E61D",
              color: "#222",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              padding: "12px 0",
              fontSize: "18px",
              marginBottom: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            Sign In
            <span style={{ fontSize: "20px" }}>→</span>
          </button>

          <a
            href="#"
            style={{
              color: "#222",
              fontWeight: "500",
              textDecoration: "underline",
              fontSize: "15px",
              marginTop: "8px",
            }}
          >
            Forget Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signin;
