import React from 'react'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import './ChatHeader.css'

function ChatHeader({ channelName }) {
  return (
    <div className="ChatHeader">
      <div className="ChatHeader_left">
        <h3>
          <span className="ChatHeader_hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="ChatHeader_right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

      <div className="ChatHeader_search">
        <input placeholder="Search" />
        <SearchRoundedIcon />
      </div>

      <SendRoundedIcon />
      <HelpRoundedIcon />
      </div>
    </div>
  )
}

export default ChatHeader
