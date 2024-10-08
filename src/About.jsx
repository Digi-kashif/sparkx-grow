import "./Style/About.css";
import "./Style/abt2.css";

import Services from './mis';
import AboutPage from "../src/images/bg2.png";
// import AboutPage from "../src/images/bg1.png";


function About() {
  return (
    <>
      <div className="aboutPage1">
        <div className="imgConAbout">
          <img src={AboutPage} alt="" />
        </div>
        <h1>
          We at <span>Sparkxgrow</span>, believe innovation <br />
          To be synonymous with excellence <br />
          In <span>web development</span>
        </h1>
        <button>Get A Quote</button>
      </div>
      <div className="Story">
        <p>
          We seek to translate your concepts into the reality leveraging the
          newest technological advances and most intricate creative solutions so
          that you do not go unnoticed on the Internet today.
        </p>
        <h1>Our Story </h1>
        <div className="StoryCon">
          <img src={AboutPage} alt="" />
          <p>
            The founders of SparxGrow set out to fulfill the goal of client
            satisfaction by changing the conventional way of web development and
            providing bespoke high-quality solutions.
            <br />
            <br />
            From a handful of passionate professionals, this Agency has
            transformed into a top agency admired for its knowledge, creativity,
            and success of its clients.
            <br />
            <br />
            Along our way, we have many stories of success where companies of
            different scales have recorded great improvement with the help of
            our web solutions tailored to fit their needs.
          </p>
        </div>
      </div>
      <Services />
      {/* <Mission /> */}
      <Busi />
    </>
  );
}
export default About;

// function Mission() {
//   return (
//     <div className="mission">
//       <h1>Mission & Vision</h1>
//       <div className="mission1 Miss">
//         <img src={AboutPage} alt="" />
//         <div className="contentMission">
//           <h3>Mission</h3>
//           <p>
//             To provide businesses with enhanced web development services that
//             improve their online exposure and foster growth within them is our
//             goal. We are positive and results-oriented and we will always
//             constantly seek the uprise of new solutions that drive even more
//             effective outcomes.
//           </p>
//         </div>
//       </div>
//       <div className="mission2 Miss">
//         <div className="contentMission1 ">
//           <h3>Vision</h3>
//           <p>
//             To provide businesses with enhanced web development services that
//             improve their online exposure and foster growth within them is our
//             goal. We are positive and results-oriented and we will always
//             constantly seek the uprise of new solutions that drive even more
//             effective outcomes.
//           </p>
//         </div>
//         <img src={AboutPage} alt="" />
//       </div>
//     </div>
//   );
// }




function Busi() {
  const cardData = [
    {
      title: "Tailored Solutions",
      imgs: AboutPage,
      cardName:
        "We develop the perfect web solutions that meet each client's specific business purpose.",
    },
    {
      title: "Expert Team",
      imgs: AboutPage,
      cardName:
        "Each expert is experienced and is filled with creative ideas for every project and this results in quality work.",
    },
    {
      title: "Client-Centric Approach",
      imgs: AboutPage,
      cardName:
        "The communication solutions offered are in line with the client’s requirements by focusing on the strategies needed to accomplish their goals.",
    },
    {
      title: "Proven Track Record",
      imgs: AboutPage,
      cardName:
        "Clients' testimonials speak of a commitment to delivering only the best results in each project.",
    },
  ];

  return (
    <div className="busi">
      <div className="busiCon">
        <h1>Why is it that Sparkxgrow fits your Business?</h1>
        <p>
          Sparkxgrow is your right choice, because you work with a team <br />
          that really cares about your success, and not just yourself.
        </p>
        <div className="card-container-busi">
          {cardData.map((card, index) => (
            <div className="card-con-busi">
              <div className="card-busi" key={index}>
                <h3>{card.title}</h3>
                <img src={card.imgs} alt="" />
              </div>
              <p>{card.cardName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
