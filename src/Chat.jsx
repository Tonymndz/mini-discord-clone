import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./Chat.css";
import Message from "./Message";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { useSelector } from 'react-redux'
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from 'firebase';
import EmojiPopUp from "./EmojiPopUp";
import GIFPopUp from "./GIFPopUp";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId).collection('messages')
        .orderBy('timestamp', "desc")
        .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
    }
  }, [channelId])

  const sendMessage = (evt) => {
    if (evt) evt.preventDefault();
    db.collection('channels').doc(channelId).collection('messages').add({ timestamp: firebase.firestore.FieldValue.serverTimestamp(), message: input, user})
    setInput("");
  }

  const sendEmoji = (emojiLink) => {
    db.collection('channels').doc(channelId).collection('messages').add({ timestamp: firebase.firestore.FieldValue.serverTimestamp(), message: emojiLink, user})
    setInput("");
  }

  const scrollToBottom = () => messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(scrollToBottom, [messages]);

  return <div className="Chat">
    <ChatHeader channelName={channelName} />

    <div className="Chat_messages">
      {messages.slice().reverse().map(({timestamp, message, user}) => <Message 
        key={timestamp + message + user}
        user={user}
        message={message}
        timestamp={timestamp}
      />)}
      <div ref={messagesEndRef} />
    </div>

    <div className="Chat_input">
      <AddCircleIcon fontSize="large" />
      <form>
        <input placeholder={`Message #${channelName}`} disabled={!channelId} value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="Chat_inputButton" type="submit" onClick={sendMessage} >
          Send Message
        </button>
      </form>

      <div className="Chat_inputIcons">
        <GIFPopUp sendEmoji={sendEmoji} />
        <EmojiPopUp addEmojiToInput={(EmojiToAdd) => setInput(input + EmojiToAdd)} />
      </div>
    </div>

  </div>
}

export default Chat;
