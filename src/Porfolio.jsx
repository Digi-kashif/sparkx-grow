// Portfolio.jsx
import React, { useState } from "react";
import axios from "axios"; // Import axios
import "./Style/Portfolio.css";
import p1 from "./images/reelsImg1.png";
import p2 from "./images/reelsImg2.png";
import p3 from "./images/reelsImg3.png";
import p4 from "./images/reelsImg4.png";
import p5 from "./images/reelsImg5.png";
import p6 from "./images/cw1.png";

const cardsData = [
  { id: 1, imgSrc: p1, name: "Card 1" },
  { id: 2, imgSrc: p2, name: "Card 2" },
  { id: 3, imgSrc: p3, name: "Card 3" },
  { id: 4, imgSrc: p4, name: "Card 4" },
  { id: 5, imgSrc: p5, name: "Card 5" },
  { id: 6, imgSrc: p6, name: "Card 6" },
];

function Portfolio() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMess("");
  };

  const formSubmitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { name, email, mess };

    try {
      await axios.post("http://localhost:5000/apply", formData);
      setLoading(false);
      resetForm();
      closePopup();
    } catch (error) {
      setLoading(false);
      console.error("Error data:", error.response.data);
    }
  };

  return (
    <>
      <h1 className="portHeading">Portfolio</h1>
      <div className="Portfolio">
        {cardsData.map((card) => (
          <div key={card.id} className="cardPort">
            <img src={card.imgSrc} alt={card.name} className="cardPort-img" />
            <div className="cardPort-name">{card.name}</div>
          </div>
        ))}
      </div>
      <div className="portBTN">
        <button onClick={handleButtonClick}>Let's Get Started</button>
      </div>

      {isPopupVisible && (
        <div className="pop-portfolio">
          <div className="popup-portfolio">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>Get Start a Website</h2>
            <form onSubmit={formSubmitData} className="contactForm">
              <label htmlFor="name">Name</label> <br />
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="sparxgrow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="sparxgrow@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="mess">Message</label>
              <br />
              <textarea
                required
                name="mess"
                id="mess"
                value={mess}
                onChange={(e) => setMess(e.target.value)}
              ></textarea>
              <br />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
