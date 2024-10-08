import "../Style/blogPage.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function  Tech() {
  const [tech, settech] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tech");
        settech(res.data);
      } catch (error) {
        console.error("Error fetching tech data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="Tech">
      <div className="cardContainer">
        {tech.map((card, index) => (
          <div key={index} className="card">
            <img
              src={`http://localhost:5000/uploads/${card.imagePath
                .split("\\")
                .pop()}`}
              alt={card.name || ""}
              className="cardImage"
            />
            <div className="cardBody">
              <p>{card.description}</p>
              <h4>{card.keyword}</h4>
              <div className="detailsBlog">
                <h3>Published:</h3>
                <h6>{new Date(card.date).toLocaleDateString()}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default  Tech;
