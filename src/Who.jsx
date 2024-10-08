
import "./Style/Who.css";
 

import  w1 from "./images/cw1.png";
import w2 from "./images/reelsImg3.png";

function Who() {
  return (
    <>
      <h1 className="Whotag">
        Are you <span>looking</span> to take your <span>Business</span> to the
        <span> Succeeding</span> position <span>online</span>?
      </h1>
      <div className="Who" data-aos="zoom-in">
        <div className="WhoDetail">
          <p>
            Also, look no further than our <span>custom web development</span>{" "}
            results.Our educated designers will work nearly with you to produce
            a unique website that impeccably showcases your brand and drives
            results.
          </p>
        </div>
        <div className="WhoImg ">
          <img src={w1} alt="" />
        </div>
      </div>

      <div className="secondWho" data-aos="zoom-in">
        <div className="secondImg">
          <img src={w2} alt="" />
        </div>
        <div className="secondDetail ">
          <p>
            Whether you need an <span>e-commerce</span> platform, a content
            operation system, or a <span>custom operation</span>, we've the
            experience and skills to bring your vision to life.Contact us today
            to discuss your project.
          </p>
        </div>
      </div>
    </>
  );
}

export default Who;
