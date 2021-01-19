import React from 'react';

import {  FaCircle} from "react-icons/fa";

import '../components/css/textContainer.css'

const TextContainer = ({ users }) => (
  <div className="textContainer">
   
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem" >
                    {name}
                    <span style={{marginLeft: '5px', paddingTop:'2px'}} ><FaCircle color='green'/></span>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;