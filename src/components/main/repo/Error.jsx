import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ fontSize: "3rem" }}> ERROR</h1>
      <button
        onClick={() => navigate("/")}
        style={{
          background: "crimson",
          padding: "5px 15px",
          fontSize: "1.5rem",
          border: "1px solid crimson",
          cursor: "pointer",
          borderRadius: "5px",
          color: "#fff",
          margin: "0 auto",
        }}
      >
        GO TO MAIN PAGE
      </button>
    </div>
  );
};

export default Error;
