import React from "react";
import BusinessList from "./BusinessList";
import Chatbot from "./Chatbot";
import useGeoLocation from "./useGeoLocation";

function App() {
  const location = useGeoLocation();

  return (
    <div>
      <h1>Welcome to Township Small Business</h1>
      <BusinessList />
      <Chatbot />
      {location && (
        <div>
          <p>Location: {location.lat}, {location.lon}</p>
        </div>
      )}
    </div>
  );
}

export default App;

