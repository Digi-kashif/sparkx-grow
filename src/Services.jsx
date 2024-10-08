import "./Style/Service.css";


import s1 from './images/1.png'
import s2 from "./images/2.png";
import s3 from "./images/3.png";
import s4 from "./images/4.png";
import s5 from "./images/5.png";
import s6 from "./images/6.png";



function Service() {
  return (
    <>
      <h1 className="servheading">Services</h1>
      <div className="services">
        <div className="serv">
          <div className="circleCard1 CIRCLE">
            <img src={s1} alt="" />
          </div>
          <div className="servCard1  cardService">
            <h3>Custom Website Design</h3>
            <p>
              Create stunning, one-of-a-kind websites that perfectly reflect
              your brand identity. Our expert designers will work closely with
              you to understand your vision and craft a website that not only
              looks great but also drives results.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard2 CIRCLE">
            <img src={s2} alt="" />
          </div>
          <div className="servCard2 cardService">
            <h3>Responsive Web Design</h3>
            <p>
              In today's mobile-first world, having a responsive website is
              essential. Our team ensures that your website adapts seamlessly to
              different screen sizes, providing a consistent and enjoyable user
              experience.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard3 CIRCLE">
            <img src={s3} alt="" />
          </div>
          <div className="servCard3 cardService">
            <h3>E-commerce Development</h3>
            <p>
              Transform your online store into a powerful sales engine with our
              expert e-commerce development services. We specialize in creating
              user-friendly online shopping experiences that drive conversions
              and maximize revenue.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard4 CIRCLE">
            <img src={s4} alt="" />
          </div>
          <div className="servCard4 cardService">
            <h3>Content Management Systems(CMS)</h3>
            <p>
              Empower your team to easily manage your website content with our
              CMS implementation services. We offer expertise in popular
              platforms like WordPress, Drupal, and Joomla, and can customize
              them to meet your specific requirements.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard5 CIRCLE">
            <img src={s5} alt="" />
          </div>
          <div className="servCard5 cardService">
            <h3>Search Engine Optimization(SEO)</h3>
            <p>
              Improve your website's visibility in search engine results and
              attract more organic traffic with our comprehensive SEO services.
              Our experts will conduct thorough keyword research, optimize your
              website's content and structure, and build high-quality backlinks
              to boost your rankings.
            </p>
          </div>
        </div>
        <div className="serv">
          <div className="circleCard6 CIRCLE">
            <img src={s6} alt="" />
          </div>
          <div className="servCard6 cardService">
            <h3>Website Maintenance and Updates</h3>
            <p>
              Keep your website secure, up-to-date, and performing optimally
              with our expert maintenance services. Our team provides regular
              security checks, content updates, and technical support to ensure
              your website remains functional and effective.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Service;
