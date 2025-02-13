import React, { useState, useEffect } from "react";
import axios from "axios";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios.get("/api/businesses")
      .then(response => setBusinesses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Businesses</h1>
      <ul>
        {businesses.map((business) => (
          <li key={business._id}>
            <h2>{business.name}</h2>
            <p>{business.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessList;

