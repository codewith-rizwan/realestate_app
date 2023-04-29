import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail.js";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDasboard";
import Footer from "./components/Footer";

export default function App() {
  const [estate, setEstate] = useState([
    {
      id: 1,
      name: "Taj Building",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Mumbai, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9f0cCTkz254VDdmfGT0G5FbJFXpIKxUjBw&usqp=CAU",
      price: 25800000,
      type: "residential",
    },
    {
      id: 2,
      name: "Nishant Tower",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Akola, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-TnUVZe-UUB4_iOmTab0Mx4XQG0gOlhA0shh6HSvLOH6n6_et7hr4zME2muJvLgd7pg&usqp=CAU",
      price: 100000000,
      type: "residential",
    },
    {
      id: 3,
      name: "Paradise Apartment ",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Nagpur, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEp6tIwf7eam6vCEgBTuQ7UqIe8MoE9Qczg&usqp=CAU",
      price: 950000,
      type: "residential",
    },
    {
      id: 4,
      name: "Wellcome Hotel",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Nagpur, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKVkU_qCcONX-PsvQB1LIAQgyh-8jXaFeRg&usqp=CAU",
      price: 80000000,
      type: "residential",
    },
    {
      id: 5,
      name: "Taj Building",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Mumbai, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9f0cCTkz254VDdmfGT0G5FbJFXpIKxUjBw&usqp=CAU",
      price: 2500000,
      type: "residential",
    },
    {
      id: 6,
      name: "Mujahid Tower",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Akola, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-TnUVZe-UUB4_iOmTab0Mx4XQG0gOlhA0shh6HSvLOH6n6_et7hr4zME2muJvLgd7pg&usqp=CAU",
      price: 10000000,
      type: "residential",
    },
    {
      id: 7,
      name: "Elexa Residential",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Nagpur, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEp6tIwf7eam6vCEgBTuQ7UqIe8MoE9Qczg&usqp=CAU",
      price: 9505000,
      type: "residential",
    },
    {
      id: 8,
      name: "Pride Hotel",
      description:
        "Its the building built by mr. Rizwan Khan Mumtaz Khan in Akola, Maharashtra",
      location: "Pune, MH",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKVkU_qCcONX-PsvQB1LIAQgyh-8jXaFeRg&usqp=CAU",
      price: 568800000,
      type: "residential",
    },
  ]);
  return (
    <>
      <Router className="nav">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home estate={estate} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:id" element={<Detail estate={estate} />} />
          <Route path="/user/dashboard/:email" element={<UserDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
