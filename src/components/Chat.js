import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client'
import './css/chat.css'
import InfoBar from '../components/InfoBar'
import Input from '../components/Input'
import Messages from '../components/Messages'
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT ='https://k-react-chat-app.herokuapp.com/'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  

 useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message])
    })
    return () => {
      socket.off()
    }
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }

    console.log(messages, message)
  }
 
  return (
    <div className='outerContainer'>
      <div className='container'>
        
        <InfoBar room={room} />
        <Messages messages={messages} name={name}></Messages>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
     

    </div>
  );
}

export default Chat;