import Price from "./Price";
import "./Style/Main.css";
import img1 from "./images/reelsImg1.png";
import img2 from "./images/reelsImg2.png";
import img3 from "./images/reelsImg3.png";
import img4 from "./images/reelsImg4.png";
import img5 from "./images/reelsImg5.png";
import temp from "../src/images/idrees.png";
import Flow from "./Flow";
import Service from "./Services";
import Marquee from "./Marquee";
import Client from "./Client";
import Who from "./Who";
import Porfolio from "./Porfolio";
import React, { Suspense } from "react";
const Counter = React.lazy(() => import("./counter"));
function Main() {
  return (
    <>
      <h1 className="mainHeading">
        Grow Your <span>Business</span> Online <br />
        Custom Web <span>Development</span> Solutions <br />
        <button>Get started</button>
      </h1>
      <div className="Main">
        <div className="reel1">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="reel2">
          <img src={img5} alt="" />
          <img src={img4} alt="" />
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img src={img1} alt="" />
        </div>{" "}
        <div className="reel3">
          <img src={img4} alt="" />
          <img src={img2} alt="" />
          <img src={img5} alt="" />
          <img src={img3} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="marquee"></div>
      <Who />
      <Marquee />
      <div className="portBTN">
        <button>Get A Website Audit</button>
      </div>
      <Service />
      <Porfolio />
      {/* <Team /> */}
      <Price />
      <Client />
      <Flow />
      <Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </Suspense>
    </>
  );
}
export default Main;

// function Team() {
//   const team = [
   
//     {
//       name: "M IDREES FAIZ",
//       role: "Full Stack Developer",
//       des: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam recusandae dolorum harum, facere architecto nemo",
//       img: temp,
//     },
//     {
//       name: "M IDREES FAIZ",
//       role: "Full Stack Developer",
//       des: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam recusandae dolorum harum, facere architecto nemo",
//       img: temp,
//     },
//     {
//       name: "M IDREES FAIZ",
//       role: "Full Stack Developer",
//       des: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam recusandae dolorum harum, facere architecto nemo",
//       img: temp,
//     },
//     {
//       name: "M IDREES FAIZ",
//       role: "Full Stack Developer",
//       des: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam recusandae dolorum harum, facere architecto nemo",
//       img: temp,
//     },
 
//   ];
//   return (
//     <div className="team">
//       <h1>Meet Our Team</h1>

//       <div className="teamCon">
//         {team.map((teamData) => (
//           <div className="teamManage">
//             <div className="imgCircle">
//               <img src={temp} alt="" />
//             </div>

//             <div className="teamDis">
//               <h2>{teamData.name}</h2>
//               <h3>{teamData.role}</h3>
//               <p>{teamData.des}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
