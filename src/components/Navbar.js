import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  const navigate = useNavigate();

  const signOutHandler = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = allUsers.map((user) => {
      if (user.email === loggedInUser.email) {
        return loggedInUser;
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  useEffect(() => {
    loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  }, [loggedInUser]);

  return (
    <>
      <div className="lin">
        <ul className="nav-left">
          <li>
            <Link to="/">
              Real Estate<span> Listings</span>
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          {loggedInUser && loggedInUser.email ? (
            <>
              <Link to={`/user/dashboard/${loggedInUser.email}`}>
                Go to dashboard
              </Link>
              <button onClick={signOutHandler}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/signup" className="nav-right-li">
                Signup
              </Link>
              <Link to="/login" className="nav-right-li">
                Login
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
