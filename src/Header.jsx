import { Call, EmailOutlined, PlaceOutlined } from "@mui/icons-material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { useCreateUserMutation } from "./apis";
import Logo from "../src/images/Logo.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Main from "./Main";
import Form from "./Form";
import '../src/Style/Header.css'
import About from "./About";
import Blog from "./Blog";
import Digital from "./Digital";
import Swal from "sweetalert2";
import { FaBars } from 'react-icons/fa'; // Import an icon library like react-icons



function Header() {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handlePage(comingPage) {
    setPage(comingPage);
    setIsMenuOpen(false); // Close the menu when a page is selected
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        {/* <p>SPAR<span>X</span>GROW</p> */}
        <button className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </button>
        <button onClick={() => handlePage("contact")}>Contact Us</button>
                <div className={`headerLink ${isMenuOpen ? 'open' : ''}`}>
          <div className="home HL" onClick={() => handlePage("home")}>
            Home
          </div>
          <div className="service HL" onClick={() => handlePage("about")}>
            About
          </div>
          <div className="Package HL" onClick={() => handlePage("blog")}>
            Blog
          </div>
          <div className="Package HL" onClick={() => handlePage("digital")}>
            Digital Marketing
          </div>
        </div>
       
      </header>
      {page === "home" && <Main />}
      {page === "about" && <About />}
      {page === "blog" && <Blog />}
      {page === "contact" && <Form />}
      {page === "digital" && <Digital />}
      <Footer />
    </>
  );
}
export default Header;

function Footer() {
  const [email, setEmail] = useState('')
  const [createUser] = useCreateUserMutation()

  
const handleSubscribe = async () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Please enter a valid email address.',
      });
      return;
  }

  try {
      await createUser({ email }).unwrap(); // Make the API call
      Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: "You've subscribed to the newsletter!",
      }).then(() => {
          setEmail('');
        
      });
  } catch (error) {
      Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Failed to subscribe. Please try again later.',
      });
  }
};
  return (
    <>
      <footer>
        <div className="detail" data-aos="fade-right">
          <h2>Company</h2>    
          <p>
          We seek to translate your concepts into the reality leveraging the newest technological advances and most intricate creative solutions so that you do not go unnoticed on the Internet today.{" "}
          </p>
        </div>
        <div className="other" data-aos="fade-right">
          <h2>Other Links</h2>
          <div className="footerLink">
            <FiberManualRecordIcon sx={{ fontSize: 18, color: "#fa8232" }} />
            <p> Home</p>
          </div>
          <div className="footerLink">
            <FiberManualRecordIcon sx={{ fontSize: 18, color: "#fa8232" }} />
            <p> About Us</p>
          </div>
          <div className="footerLink">
            <FiberManualRecordIcon sx={{ fontSize: 18, color: "#fa8232" }} />
            <p> Contact Us</p>
          </div>
          <div className="footerLink">
            <FiberManualRecordIcon sx={{ fontSize: 18, color: "#fa8232" }} />
            <p> Apply</p>
          </div>
        </div>
        <div className="conInfo" data-aos="fade-right">
          <h2>Contact Information</h2>
          <div className="footerIcon">
            <Call sx={{ fontSize: 30, color: "#fa8232" }} />
            <a href="tel:03183391019">+923183391019</a>
          </div>
          <div className="footerIcon">
            <EmailOutlined sx={{ fontSize: 30, color: "#fa8232" }} />
            <a href="mailto:sparxgrow@gmail.com">sparxgrow@gmail.com</a>
          </div>
          <div className="footerIcon">
            <PlaceOutlined sx={{fontSize: 30, color: "#fa8232" }} />
            <a href="" target="_blank" rel="noopener noreferrer">
              Multan,Punjab Pakistan
            </a>
          </div>
        </div>
        <div className="Loc" data-aos="fade-right">
          <div className="headDetail">
            <div className="foootImg">
              {/* <img src={Logo} alt="" /> */}
            </div>
          </div>
         
          <div className="newsLetter">
            <h1>newsLetter</h1>
            <div className="inputBtn d-flex">
            <input
            value={email}
             type="email" 
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Email" />
            
            <button onClick={handleSubscribe} className="subsBtn">subscribe</button>
            </div>
          
          </div>
          <div className="mapDiv">
          <MapComponent />
          </div>
          
        </div>
      </footer>
    </>
  );
}

const address = "51 Sewell Road, BD39TD";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address
)}`;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = () => {
  const position = [30.1575, 71.5249];

  return (
    <MapContainer center={position} zoom={15} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Multan, Punjab, Pakistan</Popup>
      </Marker>
    </MapContainer>
  );
};
