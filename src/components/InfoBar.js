import React from 'react';
import { FaRegWindowClose, FaCircle} from "react-icons/fa";



import './css/infoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <FaCircle/ >
      <h3 style={{marginLeft: '5px'}}>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><FaRegWindowClose color="blue" size={25}/></a>
    </div>
  </div>
);

export default InfoBar;