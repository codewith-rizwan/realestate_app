import React, { useState } from "react";
import "./userdashboard.css";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("savedProperties");

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="userDashBoard_container">
      <h1> Welcome🤗 {loggedInUser.username}</h1>
      <div className="tabs">
        <button
          className={activeTab === "savedProperties" ? "active" : ""}
          onClick={() => handleTabChange("savedProperties")}
        >
          Saved Properties
        </button>
        <button
          className={activeTab === "contactHistory" ? "active" : ""}
          onClick={() => handleTabChange("contactHistory")}
        >
          Contact History
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "savedProperties" && (
          <>
            <div className="saved-properties">
              <h2>Saved Properties</h2>
              <ul>
                {loggedInUser &&
                  loggedInUser.savedProperties.map((property) => (
                    <li key={property.id}>
                      <h3>{property.name}</h3>
                      <p>Price: {property.price}</p>
                      <p>Type: {property.type}</p>
                      <p>Address: {property.location}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
        {activeTab === "contactHistory" && (
          <>
            <div className="contact-history">
              <h2>Contact History</h2>
              <ul>
                {loggedInUser &&
                  loggedInUser.contactHistory.map((contact) => (
                    <li key={contact.id}>
                      <h3>{contact.name}</h3>
                      <p>Contacted on: {contact.date}</p>
                      <p>Contact method: via Email</p>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
