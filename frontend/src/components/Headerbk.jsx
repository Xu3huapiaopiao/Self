import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";



const Headerbk = ({ category, title }) => (
  <div className=" mb-10">
    
    <p className="text-3xl font-extrabold tracking-tight text-slate-50 flex">
    <nav>
        <Link to= "/Data"><BiArrowBack /></Link>
      </nav>{title} 
    </p>
  </div>
);

export default Headerbk;
