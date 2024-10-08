import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "./Style/Admin.css";


// Reusable Form Component
function Form({ endpoint }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("keyword", keyword);
    formData.append("date", date);
    formData.append("name", name);

    try {
      const response = await axios.post(
        `http://localhost:5000/${endpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error uploading data:", error.response.data);
        alert(`Error: ${error.response.data.message || "Upload failed."}`);
      } else {
        console.error("Network error:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// Specific Form Components

export function  FormSEO() {
  const [seo, setseo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/seo");
        setseo(res.data);
      } catch (error) {
        console.error("Error fetching seo data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Form endpoint="seo" />
      <h1>seo Data</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {seo.length > 0 ? (
        seo.map((item) => (
          <div key={item._id}>
            <img
              src={`http://localhost:5000/uploads/${item.imagePath
                .split("\\")
                .pop()}`}
              alt={item.name || ""}
              width={100}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{new Date(item.date).toLocaleDateString()}</p>{" "}
          </div>
        ))
      ) : (
        <p>No seo data available.</p>
      )}
      </div>
    </>
  );
}


export function  FormAI() {
  const [ai, setai] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/ai");
        setai(res.data);
      } catch (error) {
        console.error("Error fetching ai data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Form endpoint="ai" />
      <h1>AI Data</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {ai.length > 0 ? (
        ai.map((item) => (
          <div key={item._id}>
            <img
              src={`http://localhost:5000/uploads/${item.imagePath
                .split("\\")
                .pop()}`}
              alt={item.name || ""}
              width={100}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{new Date(item.date).toLocaleDateString()}</p>{" "}
          </div>
        ))
      ) : (
        <p>No ai data available.</p>
      )}
      </div>
    </>
  );
}


export function  FormTech() {
  const [tech, settech] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tech");
        settech(res.data);
      } catch (error) {
        console.error("Error fetching tech data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Form endpoint="tech" />
      <h1>tech Data</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {tech.length > 0 ? (
        tech.map((item) => (
          <div key={item._id}>
            <img
              src={`http://localhost:5000/uploads/${item.imagePath
                .split("\\")
                .pop()}`}
              alt={item.name || ""}
              width={100}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{new Date(item.date).toLocaleDateString()}</p>{" "}
          </div>
        ))
      ) : (
        <p>No tech data available.</p>
      )}
      </div>
    </>
  );
}


export function FormWeb() {
  const [web, setWeb] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/web");
        setWeb(res.data);
      } catch (error) {
        console.error("Error fetching web data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Form endpoint="web" />
      <h1>Web Data</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {web.length > 0 ? (
        web.map((item) => (
          <div key={item._id}>
            <img
              src={`http://localhost:5000/uploads/${item.imagePath
                .split("\\")
                .pop()}`}
              alt={item.name || ""}
              width={100}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{new Date(item.date).toLocaleDateString()}</p>{" "}
          </div>
        ))
      ) : (
        <p>No web data available.</p>
      )}
      </div>
    </>
  );
}


// Main Admin Component
function Admin() {
  return (
    <Router>
      <div className="admin-container">
        <nav className="sidebar">
          <h2>Admin Dashboard</h2>
          <ul>
            <li>
              <Link to="/admin/ai">AI</Link>
            </li>
            <li>
              <Link to="/admin/seo">SEO</Link>
            </li>
            <li>
              <Link to="/admin/tech">Tech</Link>
            </li>
            <li>
              <Link to="/admin/web">Web</Link>
            </li>
          </ul>
        </nav>
        <div className="contentadmin">
          <Routes>
            <Route path="/admin/ai" element={<FormAI />} />
            <Route path="/admin/seo" element={<FormSEO />} />
            <Route path="/admin/tech" element={<FormTech />} />
            <Route path="/admin/web" element={<FormWeb />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Admin;
