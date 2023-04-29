import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSave, BsSaveFill } from "react-icons/bs";

const Home = ({ estate }) => {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState(estate);
  const [inputType, setInputType] = useState("");
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  // const loggedInUser =
  // const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser || !loggedInUser.email) {
      navigate("/login");
    }
  }, [loggedInUser]);

  const searchHandler = () => {
    let updatedList = [...estate];

    if (inputType === "name")
      updatedList = updatedList.filter((item) =>
        item.name.toLocaleLowerCase().includes(inputVal.toLocaleLowerCase())
      );
    if (inputType === "price")
      updatedList = updatedList.filter((item) => item.price < inputVal);
    if (inputType === "location")
      updatedList = updatedList.filter((item) =>
        item.location.toLocaleLowerCase().includes(inputVal.toLowerCase())
      );

    setList(updatedList);
    setInputVal("");
  };

  const saveHandler = (id) => {
    const existingPropertyIndex = loggedInUser.savedProperties.findIndex(
      (item) => item.id === id
    );
    if (existingPropertyIndex === -1) {
      const currProperty = estate.find((item) => item.id === id);
      loggedInUser.savedProperties.push(currProperty);
    } else {
      loggedInUser.savedProperties.splice(existingPropertyIndex, 1);
    }

    const updatedUser = { ...loggedInUser };
    setLoggedInUser(updatedUser);

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
  };

  return (
    <div className="home_container">
      <div className="home_header">
        <h1>Real Estate List</h1>
        <select
          className="home_search-select"
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="0">Select</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="location">Location</option>
        </select>
        <input
          className="home_search-input"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="home_search-button" onClick={searchHandler}>
          Search
        </button>
      </div>
      <br />
      <br />
      <div className="list">
        {list.map((item) => (
          <div className="item">
            <img className="item-img" src={item.imgUrl} alt="" />

            <p className="item-name">Name: {item.name}</p>
            <p className="item-price">Price: {item.price}</p>
            <p className="item-type">Type: {item.type}</p>
            <p className="item-location">Address: {item.location}</p>
            <div>
              <p>
                <Link className="item-link" to={`/details/${item.id}`}>
                  View Full Details
                </Link>
              </p>
            </div>
            <div>
              {loggedInUser &&
              loggedInUser.savedProperties &&
              loggedInUser.savedProperties.find(
                (savedItem) => savedItem.id === item.id
              ) ? (
                <BsSaveFill onClick={() => saveHandler(item.id)} />
              ) : (
                <BsSave onClick={() => saveHandler(item.id)} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
