import React, { useState } from "react";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  console.log(data);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {data && <h2>Welcome {data.username.username}</h2>}
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </>
  );
};

export default Authenticate;
