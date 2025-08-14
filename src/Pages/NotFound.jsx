// src/pages/NotFound.jsx

import React from 'react';

const NotFound = () => {
  return (
    <section style={{
      padding: "100px",
      textAlign: "center",
      color: "#fff",
      backgroundColor: "#121212",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px" }}>Oops! Page Not Found</p>
    </section>
  );
};

export default NotFound;
