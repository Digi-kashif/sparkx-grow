import "./Styles.css";
import circle from "./images/circle.png";
const priceList = [
  {
    img: circle,
    name: "Basic",
    amount: "$100",
    req1: "Social Media Setup ",
    req2: "Monthly Social Media Posts (15 posts)",
    req3: "Monthly Analytics Report",
  },
  {
    img: circle,
    name: "Standard",
    amount: "$200",
    req1: "Social Media Setup + 24Posts",
    req2: "Advanced SEO(keyword research, on-page) ",
    req3: "Email Marketing",
  },
  {
    img: circle,
    name: "Premium",
    amount: "$300",
    req1: "Social Media Strategy + (30 posts)",
    req2: "Content Creation + Email Marketing",
    req3: "Advanced SEO (link building, technical SEO)",
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
