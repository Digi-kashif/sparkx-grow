import m1 from "./images/m1.jpeg";
import m2 from "./images/m2.jpeg";
import m3 from "./images/m3.jpeg";
import m4 from "./images/m4.jpeg";
import m5 from "./images/m5.jpeg";
import m6 from "./images/m6.jpeg";
import m7 from "./images/m7.jpeg";
import m8 from "./images/m8.jpeg";
import m9 from "./images/m9.jpeg";
import "./Style/Marquee.css";
function Marquee() {
  return (
    <div className="marquee">
      <div class="scroll-text">
        <img src={m1} alt="" />
        <img src={m2} alt="" />
        <img src={m3} alt="" />
        <img src={m4} alt="" />
        <img src={m5} alt="" />
        <img src={m6} alt="" />
        <img src={m7} alt="" />
        <img src={m8} alt="" />
        <img src={m9} alt="" />
      </div>
    </div>
  );
}
export default Marquee;
