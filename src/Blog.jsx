import React, { useState } from "react";
import "./Style/Blog.css";
// import cardImg from "./images/reelsImg5.png";


 
import Web from "./BlogPage/Web";
import Seo from "./BlogPage/Seo";
import AI from "./BlogPage/AI";
import Tech from "./BlogPage/Tech";
 


function Blog() {
  const [page, setPage] = useState("web");


  function handlePage(newPage){
    setPage(newPage)
  }

  return (
    <>
      {/* Header Section */}
      <div className="blogContainer">
        <div className="containerHeader">
          <h1>Welcome to Our Blog</h1>
          <p>
            Start your blog today and join a community of writers and readers
            sharing their stories and ideas. We offer everything you need to get
            started, from helpful tips to tutorials.
          </p>
          <button>
            <span className="learnText">Learn More</span>
            <span className="arrow"> &#8594;</span>
          </button>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="listDiv">
        <div className="categoryList">
     
          <div onClick={() => handlePage("web")}>Web</div>
          <div onClick={() => handlePage("seo")}>SEO</div>
          <div onClick={() => handlePage("ai")}>AI</div>
          <div onClick={() => handlePage("tech")}>Tech</div>
        </div>
      </div>
   
      {page === "web" && <Web />}
      {page === "seo" && <Seo />}
      {page === "ai" && <AI />}
      {page === "tech" && <Tech />}


      
    </>
  );
}

export default Blog;
