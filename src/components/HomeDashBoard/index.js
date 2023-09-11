import React from "react";

export default function DashBoard() {
  const centerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Center vertically
  };

  return (
    <div style={centerStyles}>
      <h1>Home</h1>
    </div>
  );
}
