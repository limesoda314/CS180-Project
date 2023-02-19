import React from "react";
  
import {Link} from "react-router-dom";

function About() {
  return (
    <div>
      <h1>
        X-ML stands for Excelent Machine Learning :) 
        
        <Link to="/">
          home
        </Link>

      </h1>
    </div>
  );
}
  
export default About;