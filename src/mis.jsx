// import "./Style/Service.css";
// import "./style/mis.css";
import "../src/Style/mis.css"

import s1 from './images/1.png'
import s2 from "./images/2.png";
import s3 from "./images/3.png";



function mission() {
  return (
    <>
      <h1 className="servheading">Mission Vision Values
      </h1>
      <div className="services">
        <div className="serv">
          <div className="circleCard1 CIRCLE">
            <img src={s1} alt="" />
          </div>
          <div className="servCard1  cardService">
            <h3>MISSION</h3>
            <p>
            Our mission is to empower businesses to thrive in the digital landscape through innovative marketing solutions. We believe that every business deserves to succeed online, and we're committed to helping them achieve their goals.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard2 CIRCLE">
            <img src={s2} alt="" />
          </div>
          <div className="servCard2 cardService">
            <h3>VISION</h3>
            <p>
            Our vision is to become the leading digital marketing agency, renowned for creativity, innovation, and client success. We strive to revolutionize the way businesses interact with their audiences through cutting-edge digital marketing strategies.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard3 CIRCLE">
            <img src={s3} alt="" />
          </div>
          <div className="servCard3 cardService">
            <h3>VALUES</h3>
            <p>
            Our values are at the core of everything we do. We value innovation, always embracing creativity and staying ahead of the curve. We're client-centric, putting our clients at the heart of every decision. We believe in transparency, providing honest communication and clear results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default mission;
