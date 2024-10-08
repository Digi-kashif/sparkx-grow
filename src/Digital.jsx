

import './Style/Digital.css'
import AboutPage from "../src/images/back.jpeg";
import vector from "../src/images/vector.jpeg";
import AboutPage1 from "../src/images/icon1.png";
import AboutPage2 from "../src/images/icon2.png";
import AboutPage3 from "../src/images/icon2.png";
import AboutPage4 from "../src/images/icon5.png";
import AboutPage5 from "../src/images/icon4.png";
import Arr from "../src/images/rightArrow.png";
// import ServiceDegital from './ServiceDigital';
import Dmservices from './Dmservices';
import DesignProcess from './designprocess/DesignProcess';
import PortfolioTabs from './portfoliotabs/PortfolioTabs';
import Dmprice from './dmprice';
import Counter from './counter';
import Client from './Client';



const digital = [
  {
    img: AboutPage1,
    head: "Increase Online Visibility",
    para: "Reach a wider audience and increase your online presence.",
  },
  {
    img: AboutPage2,
    head: "Drive More Traffic, Leads, and Sales",
    para: "Get more website traffic, generate leads, and boost sales.",
  },
  {
    img: AboutPage3,
    head: "Improve Brand Awareness and Credibility",
    para: "Establish your brand as an authority in your industry.",
  },
  {
    img: AboutPage4,
    head: "Get Measurable Results and ROI",
    para: "Track your progress and see a return on investment.",
  },
  {
    img: AboutPage5,
    head: "Enhance Customer Engagement and Experience",
    para: "Build strong relationships with your customers.",
  },
];

function Digital(){
    return (
      <>
        <div className="aboutPage">
          <div className="imgConAbout">
            <img src={AboutPage} alt="" />
          </div>
          <h1>
            Boost Your Online Presence with Our <br />
            Digital <span>Marketing</span> Services
          </h1>
          <p>
            Reach, Engage, and Convert Your Target Audience <br /> with Our
            Expert Solutions
          </p>
          <button>Get Started Today</button>
        </div>
        <h1 className="digitalB">Benefits</h1>
        <div className="digitalCon">
          {digital.map((data) => (
            <div className="conStyle" key={data.id}>
              <img src={data.img} alt={data.head} />
              <h1>{data.head}</h1>
              <p>{data.para}</p>
            </div>
          ))}
        </div>
        {/* <ServiceDegital/> */}
        <Dmservices/>
        <div className="portBTN">
        <button>Get A Consultation</button>
      </div>
        <PortfolioTabs />
        <div className="portBTN">
        <button>Let's Get Started</button>
      </div>
        <DesignProcess />
        <Dmprice />
        <Counter />
        <Client />
        
        <h1 className="market">Why Invest in Digital Marketing?</h1>
        <p className="marketpara">
          With real-time analytics, you can track your website's performance in
          real-time <br />
          and make data-driven decisions to improve your marketing strategies.
        </p>
        <div className="marketing">
          <p>
            By providing personalized experiences and engaging content, you can
            foster stronger relationships with your customers and encourage
            repeat business.
          </p>
          <img src={vector} alt="" />
        </div>
        <div className="arrowD">
          <div className="arr">
            <img src={Arr} alt="" />
            <div className="arrDetail">
              {/* <img src={AboutPage} alt="" /> */}
              <h6>Scale</h6>
              <p>
                Digital marketing,
                <br /> global reach
              </p>
            </div>
          </div>
          <div className="arr">
            <img src={Arr} alt="" />
            <div className="arrDetail">
              {/* <img src={AboutPage} alt="" /> */}
              <h6>Insights</h6>
              <p>Real-time tracking, <br /> fast adaptation</p>
          </div>

            </div>
            <div className="arr">
              <img src={Arr} alt="" />
              <div className="arrDetail">
                {/* <img src={AboutPage} alt="" /> */}
                <h6>Engage</h6>
                <p>Direct customer <br />connections</p>
              </div>
            </div>
          </div>
       
      </>
    );
}

export default Digital