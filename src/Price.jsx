import "./Styles.css";
import circle from "./images/circle.png";
const priceList = [
  {
    img: circle,
    name: "Basic",
    amount: "$100",
    req1: "Basic 4 Sections",
    req2: "Basic SEO Setup",
    req3: "Basic Backend Included",
  },
  {
    img: circle,
    name: "Standard",
    amount: "$200",
    req1: "Standard 8 Sections",
    req2: "SEO Optimization",
    req3: "Backend with API Integration",
  },
  {
    img: circle,
    name: "Premium",
    amount: "$300",
    req1: "Complete 12 Sections",
    req2: "Advanced SEO Package",
    req3: "Backend with Full Customization",
  },
];

function Price() {
  return (
    <div className="priceCon">
      <h1>Our Plan</h1>
      <p className="introText">
        Choose from our three plans to find the one that best suits your needs.
 
        Each plan is tailored to provide specific features and benefits.
        Compare the options below to make an informed decision.
      </p>
      <div className="price">
        {priceList.map((data, index) => (
          <div key={index} className="displayPrice">
            <div className="mainCircle">
              <h2>{data.name}</h2>
              <img src={circle} alt="" />
            </div>
            <div className="priceDescription">
              <h3>{data.amount}</h3>

              <div className="priceList">
                <img src={circle} alt="" />
                <p>{data.req1}</p>
              </div>
              <div className="priceList">
                <img src={circle} alt="" />
                <p>{data.req2}</p>
              </div>
              <div className="priceList">
                <img src={circle} alt="" />

                <p>{data.req3}</p>
              </div>

              <div className="priceBtn">
                <button>Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
