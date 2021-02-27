import { Avatar } from '@material-ui/core'
import isUrl from 'is-url'
import React from 'react'
import './Message.css'

function Message({ timestamp, user, message }) {
  const messageIsURL = isUrl(message);

  return (
    <div className="Message">
      <Avatar src={user.photo}/>
      <div className="Message_info">
        <h4>{user.displayName}</h4>
        <span className="Message_timestamp">
          {new Date(timestamp?.toDate()).toUTCString().split(" ").slice(0, 4).join(" ")}
        </span>
        <p>
          {messageIsURL ? <img src={message} alt={message} /> : message}
        </p>
      </div>
    </div>
  )
}

export default Message
