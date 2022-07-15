import React from 'react';
import {BiFilterAlt, BiRefresh} from 'react-icons/bi';
import Button from './Button';

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-50">
      {title}
      <div style={{float:"right" }}><Button icon={<BiFilterAlt />} bgColor="#46566c" color="#fff" borderRadius="10px" />
      <Button icon={<BiRefresh />} bgColor="#46566c" color="#fff" borderRadius="10px" flip="180" /></div>
    </p>
  </div>
);

export default Header;
