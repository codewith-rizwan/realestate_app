import React, { useState } from "react";
import "./detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFillEnvelopeAtFill, BsFillEnvelopeCheckFill } from "react-icons/bs";

const Detail = ({ estate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const curr = estate.find((item) => item.id === +id);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  const contactHandler = (id) => {
    window.location.href = "mailto:raizwankhan@gmail.com";
    const existingPropertyIndex = loggedInUser.contactHistory.findIndex(
      (item) => item.id === id
    );

    if (existingPropertyIndex === -1) {
      const currProperty = estate.find((item) => item.id === id);
      currProperty.date = Date().toLocaleString();
      const updatedUser = {
        ...loggedInUser,
        contactHistory: [...loggedInUser.contactHistory, currProperty],
      };

      setLoggedInUser(updatedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    } else {
      const updatedUser = {
        ...loggedInUser,
        contactHistory: loggedInUser.contactHistory.filter(
          (item) => item.id !== id
        ),
      };
      setLoggedInUser(updatedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    }
    // navigate(`/mailto: rizwankhan@gmail.com`);
  };

  return (
    <div className="">
      {curr && (
        <div className="detail_container">
          <h1>{curr.name}</h1>
          <img src={curr.imgUrl} alt="" />
          <p>{curr.description}</p>
          <p>Price: {curr.price}</p>
          <p>Type: {curr.type}</p>
          <p>Address: {curr.location}</p>

          <div>
            <button onClick={() => contactHandler(curr.id)}>
              {loggedInUser.contactHistory &&
              loggedInUser.contactHistory.find(
                (savedItem) => savedItem.id === curr.id
              ) ? (
                <BsFillEnvelopeCheckFill size={"1.5rem"} color="black" />
              ) : (
                <BsFillEnvelopeAtFill size={"1.5rem"} color="black" />
              )}
            </button>
          </div>
          {/* <div onClick={() => contactHandler(curr.id)}>
            <Link to={`mailto: rizwankhan@gmail.com`}>
              <BsFillEnvelopeAtFill size={"1.5rem"} color="black" />
            </Link>
            <BsFillEnvelopeCheckFill />
          </div> */}
          <Link to="/" className="item-link">
            Go To Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Detail;
