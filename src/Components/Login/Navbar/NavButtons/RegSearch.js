import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const RegSearch = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/register");
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button
        type="primary"
        style={{ background: "#6F0100" }}
        onClick={clickHandler}
      >
        Register
      </Button>
      <Button type="default" onClick={() => navigate("/login")}>
        Login
      </Button>
    </div>
  );
};

export default RegSearch;
