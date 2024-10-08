import React, { useState } from "react";
import "./DesignProcess.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import lptp2 from '../images/lptp2.png'

function DesignProcess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
      <div className="headerDiv">
        <h1>Our Website Design Process</h1>
        <p>How to create a website tailored to your unique business goals?</p>
        <p>Take a look at our design process that helps us deliver</p>
        <h3>Customized and goal-oriented digital solutions.</h3>
        <TabList>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Tab key={index}>
              <div className="tab-content">
                <div
                  className={`icon-container ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <i className={`fas ${getIconClass(index)}`}></i>
                </div>
              </div>
            </Tab>
          ))}
        </TabList>
      </div>
      <div className="tabContent">
        <TabPanel>
          <div className="container">
            <div className="leftDiv">
              <h1>Ignite</h1>
              <p>
                Discover your brand's unique spark through research and
                analysis. Identify your target audience and their digital
                habits. Uncover opportunities to ignite your online presence.
              </p>
              <span>In this phase, we:</span>
              <ul>
                <li>Conduct market research and analysis</li>
                <li>Identify target audience personas</li>
                <li>Develop a unique value proposition</li>
              </ul>
            </div>
            <div className="rightDiv">
              <img src={lptp2} alt="Laptop" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="leftDiv">
              <h1>Explore</h1>
              <p>
                Develop a customized digital marketing strategy aligned with
                your goals. Explore creative solutions that drive engagement and
                conversions. Map out a roadmap for success.
              </p>
              <span>In this phase, we:</span>
              <ul>
                <li>Define digital marketing objectives</li>
                <li>Explore creative design concepts</li>
                <li>Develop a content marketing strategy</li>
              </ul>
            </div>
            <div className="rightDiv">
              <img src={lptp2} alt="Laptop" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="leftDiv">
              <h1>Create</h1>
              <p>
                Craft visually stunning and user-friendly designs that capture
                your brand's essence. Design wireframes, prototypes, and
                high-fidelity designs that exceed your expectations. Bring your
                brand to life.
              </p>
              <span>In this phase, we:</span>
              <ul>
                <li>Design visually appealing graphics</li>
                <li>Develop responsive website designs</li>
                <li>Create engaging video content</li>
              </ul>
            </div>
            <div className="rightDiv">
              <img src={lptp2} alt="Laptop" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="leftDiv">
              <h1>Build</h1>
              <p>
                Bring your design to life with seamless functionality and
                responsiveness. Develop websites, landing pages, and digital
                products that drive results. Ensure a smooth user experience.
              </p>
              <span>In this phase, we:</span>
              <ul>
                <li>Develop responsive website development</li>
                <li>Build landing pages for conversions</li>
                <li>Create digital products for engagement</li>
              </ul>
            </div>
            <div className="rightDiv">
              <img src={lptp2} alt="Laptop" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="leftDiv">
              <h1>Launch</h1>
              <p>
                Launch your digital marketing campaign with precision and flair.
                Set up analytics and tracking to measure performance and
                optimize growth. Make a lasting impression.
              </p>
              <span>In this phase, we:</span>
              <ul>
                <li>Launch website and digital products</li>
                <li>Set up analytics and tracking</li>
                <li>Develop a launch marketing plan</li>
              </ul>
            </div>
            <div className="rightDiv">
              <img src={lptp2} alt="Laptop" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="leftDiv">
              <h1>Optimize</h1>
              <p>
                Continuously monitor and analyze your campaign's performance.
                Refine and optimize your strategy to maximize ROI and fuel
                growth. Stay ahead of the competition.
              </p>
              <span>In this phase, we:</span>
              <ul>
                <li>Monitor campaign performance</li>
                <li>Analyze data for insights</li>
                <li>Refine and optimize strategy</li>
              </ul>
            </div>
            <div className="rightDiv">
              <img src={lptp2} alt="Laptop" />
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );

  function getIconClass(index) {
    switch (index) {
      case 0:
        return "fa-globe";
      case 1:
        return "fa-sitemap";
      case 2:
        return "fa-pencil-ruler";
      case 3:
        return "fa-mobile-alt";
      case 4:
        return "fa-check-circle";
      case 5:
        return "fa-rocket";
      default:
        return "";
    }
  }
}

export default DesignProcess;
