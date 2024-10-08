import React, { useEffect, useState, useRef } from "react";

function Counter() {
  const [progress, setProgress] = useState({
    project1: 0,
    project2: 0,
    project3: 0,
    project4: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  const projectTargets = {
    project1: 7,
    project2: 170,
    project3: 200,
    project4: 90,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger when the counter section is visible
        }
      },
      { threshold: 0.5 } // 50% of the element should be visible to trigger
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      Object.keys(projectTargets).forEach((key) => {
        let start = 0;
        const end = projectTargets[key];
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
          start += 1;
          setProgress((prevProgress) => ({
            ...prevProgress,
            [key]: start,
          }));
          if (start === end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [isVisible]);

  return (
    <section className="counter-container" ref={counterRef}>
      <div className="progress-item">
        <div
          className="progress-circle"
          style={{ "--progress": progress.project1 }}
        >
          <div className="progress-text">{progress.project1}+ Years</div>
        </div>
        <h3>Experience</h3>
      </div>

      <div className="progress-item">
        <div
          className="progress-circle"
          style={{ "--progress": progress.project2 }}
        >
          <div className="progress-text">{progress.project2}+</div>
        </div>
        <h3>Projects</h3>
      </div>

      <div className="progress-item">
        <div
          className="progress-circle"
          style={{ "--progress": progress.project3 }}
        >
          <div className="progress-text">{progress.project3}+</div>
        </div>
        <h3>Clients</h3>
      </div>
      <div className="progress-item">
        <div
          className="progress-circle"
          style={{ "--progress": progress.project4 }}
        >
          <div className="progress-text">{progress.project4}%</div>
        </div>
        <h3>Satisfaction </h3>
      </div>
    </section>
  );
}

export default Counter;
