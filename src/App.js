import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Admin from "./Admin";
import Newsletter from "./newsletter/NewsLetter";
import Admin2 from "./adminsite/Admin2";

function App() {
  return (
    <Router>
      <Newsletter />
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin2" element={<Admin2 />} />


      </Routes>
    </Router>
  );
}

export default App;
