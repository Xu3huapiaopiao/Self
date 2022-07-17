import React from 'react';
import {BiFilterAlt, BiRefresh} from 'react-icons/bi';
import Button from './Button';
import { Link } from "react-router-dom";

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-50">
      {title}
      <div style={{float:"right" }}><nav><Link to= "/Data"><Button icon={<BiFilterAlt />} bgColor="#46566c" color="#fff" borderRadius="10px" /></Link>
       <Button icon={<BiRefresh />} bgColor="#46566c" color="#fff" borderRadius="10px" flip="180" /></nav></div> 
    </p>
    
    
  </div>
);

export default Header;
