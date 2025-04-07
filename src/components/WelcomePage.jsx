import React, { useEffect, useState } from "react";

const WelcomePage = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/"; // Redirect to login page if token is missing
    }

    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT
    setUserEmail(decodedToken.email); // Extract email from token

    const expirationTime = decodedToken.exp * 1000;
    if (expirationTime < Date.now()) {
      localStorage.removeItem("token");
      window.location.href = "/"; // Redirect if token expired
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to login after logout
  };

  return (
    <div>
      <h1>Hello, {userEmail}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
