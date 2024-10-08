import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./PortfolioTabs.css";
import lptp from '../images/s1.jpeg'
import seo1 from '../images/se2.jpeg'
import seo2 from '../images/se3.jpeg'
import seo3 from '../images/se4.jpeg'
import seo4 from '../images/se5.jpeg'
import seo5 from '../images/se5.jpeg'
function PortfolioTabs() {
  return (
    <>
      <div className="header2">
        <br />
        <h1>My Latest Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          molestias nihil sed unde aliquam facere voluptatum ea. Voluptates
          doloribus itaque repellendus officia beatae neque nobis, quia, quod
          unde magnam mollitia.
        </p>
      <Tabs>
        <TabList className="tab-list">
          <Tab className="tab">Serach Engine Optimization</Tab>
          <Tab className="tab">Pay-Per-Click Advertising (PPC)
          </Tab>
          <Tab className="tab">Social Media Marketing (SMM)
          </Tab>
          <Tab className="tab">Content Marketing</Tab>
          <Tab className="tab">Email Marketing</Tab>
        </TabList>

        <TabPanel>
          <div className="image-row">
            <div className="image-container">
              <img src={seo5} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={seo1} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={seo2} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container">
              <img src={seo3} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={seo4} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={seo5} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 4</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 5</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 6</div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container">
              <img src={lptp} alt="Image 1" className="image" />
              <div className="overlay">
                <div className="text">Content 1</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 2" className="image" />
              <div className="overlay">
                <div className="text">Content 2</div>
              </div>
            </div>
            <div className="image-container">
              <img src={lptp} alt="Image 3" className="image" />
              <div className="overlay">
                <div className="text">Content 3</div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      </div>
    </>
  );
}

export default PortfolioTabs;
