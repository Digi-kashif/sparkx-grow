import React, { useState, useEffect } from "react";
import "./Style/Client.css";
// import l1 from "./images/l1.png";
// import c1 from "./images/idrees.png";

const slides = [
  {
    id: 1,
    name: "Emily R, Marketing Manager",
    // imgSrc: c1,
    text: "SparxGrow has been instrumental in transforming our online presence. Their SEO expertise and social media management have significantly improved our website traffic and engagement. Highly recommended!",
  },
  {
    id: 2,
    name: "David K, CEO,",
    // imgSrc: 
    text: "SparxGrow has been instrumental in transforming our online presence. Their SEO expertise and social media management have significantly improved our website traffic and engagement. Highly recommended!",
  },
  {
    id: 3,
    name: "Rachel G.",
    // imgSrc: l1,
    text: "SparxGrow's email marketing campaigns have boosted our sales and customer retention. Their attention to detail, timely delivery, and innovative approach have exceeded our expectations. We look forward to continuing our partnership",
  },
];

function Client() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider">
      <div className="slide">
        <h1>Client Testimonials</h1>
 
        <div className="image-container">
          <div className="imgBack">
            <h2>{slides[currentIndex].name}</h2>
            <img
              src={slides[currentIndex].imgSrc}
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>

          <p> {slides[currentIndex].text}</p>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Client;
