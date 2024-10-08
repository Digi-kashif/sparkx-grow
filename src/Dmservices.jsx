import "./Style/Service.css";


import s1 from './images/1.png'
import s2 from "./images/2.png";
import s3 from "./images/3.png";
import s4 from "./images/4.png";
import s5 from "./images/5.png";
import s6 from "./images/6.png";



function Serv() {
  return (
    <>
      <h1 className="servheading">Services</h1>
      <div className="services">
        <div className="serv">
          <div className="circleCard1 CIRCLE">
            <img src={s1} alt="" />
          </div>
          <div className="servCard1  cardService">
            <h3>Search Engine Optimization (SEO)
            </h3>
            <p>
            Boost your online visibility and drive organic traffic
Improve search engine rankings for targeted keywords
Increase website credibility and trust with users
Enhance brand reputation and online presence
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard2 CIRCLE">
            <img src={s2} alt="" />
          </div>
          <div className="servCard2 cardService">
            <h3> Pay-Per-Click Advertising (PPC)</h3>
            <p>
            Targeted advertising for instant results
Reach potential customers actively searching for your services
Controlled budget, measurable ROI, and flexible ad scheduling
Drive conversions, sales, and revenue growth

            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard3 CIRCLE">
            <img src={s3} alt="" />
          </div>
          <div className="servCard3 cardService">
            <h3>Social Media Marketing (SMM)
            </h3>
            <p>
            Engage with your audience, build brand awareness
Increase website traffic, generate leads, and drive sales
Leverage platforms like Facebook, Twitter, Instagram, and LinkedIn
Measure campaign success with data-driven insights

            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard4 CIRCLE">
            <img src={s4} alt="" />
          </div>
          <div className="servCard4 cardService">
            <h3>Content Marketing
            </h3>
            <p>
            Create, publish, and distribute valuable content
Attract, engage, and retain a clearly defined audience
Build trust, establish thought leadership, and drive conversions
Generate leads, sales, and long-term customer loyalty
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard5 CIRCLE">
            <img src={s5} alt="" />
          </div>
          <div className="servCard5 cardService">
            <h3>Email Marketing
            </h3>
            <p>
            Reach customers directly, personalize messages
Build loyalty, nurture relationships, and drive sales
Targeted campaigns, measurable results, and improved ROI
Stay top-of-mind, enhance brand reputation

            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard6 CIRCLE">
            <img src={s6} alt="" />
          </div>
          <div className="servCard6 cardService">
            <h3>Website Maintenance</h3>
            <p>
            Ensure website security, speed, and performance
Regular updates, backups, and technical support
Improve user experience, search engine rankings
Protect investment, maintain online presence
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Serv;
