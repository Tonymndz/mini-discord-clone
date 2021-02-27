import React, { useState, useEffect } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
// import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'
import db, { auth } from './firebase';
import { setChannelInfo } from "./features/appSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]); 
  const dispatch = useDispatch()
  const [selectedChannel, setSelectedChannel] = useState(0)

  useEffect(() => {
    db.collection('channels') // Collection located at Cloud Firestore, Collection is like the namespace
      .onSnapshot(collectionSnapshot => { // onSnapshot is a listener that once there is a chance inside the namespace this fn will run
        const firstChannel = collectionSnapshot.docs[0]
        if (firstChannel) dispatch(setChannelInfo({channelId: firstChannel.id, channelName: firstChannel.data().channelName}))
        setChannels(collectionSnapshot.docs.map(doc => ({ id: doc.id, channel: doc.data() })))
      })
  }, [dispatch])

  const addChannel = () => {
    const channelName = prompt('Enter a new channel name');
    if (channelName) {
      db.collection('channels').add({ channelName: channelName })
    }
  }

  return (
    <div className="Sidebar">
      <div className="Sidebar_top">
        <h3>General</h3>
        <ExpandMoreIcon />
      </div>

      <div className="Sidebar_channels">
        <div className="Sidebar_channelsHeader">
          <div className="Sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon onClick={addChannel}className="Sidebar_addChannel" />
        </div>
        <div className="Sidebar_channelsList">
          {channels.map(({ id, channel }, idx) => <SidebarChannel 
            key={id} 
            id={id} 
            channelName={channel.channelName}
            isSelectedChannel={idx === selectedChannel}
            selectChannel={() => setSelectedChannel(idx)} 
          />)}
        </div>
      </div>
      {/* <div className="Sidebar_voice">
        <SignalCellularAltIcon 
          className="Sidebar_voiceIcon"
          fontSize="large"
        />
        <div className="Sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="Sidebar_voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div> */}
      <div className="Sidebar_profile">
        <div className="Sidebar_profileInfo">
          <Avatar /*onClick={() => auth.signOut()}*/ src={user.photo} />
          <div className='Sidebar_profileDescription'>
            <h3>{user.displayName}</h3>
            <h3 id='profile_id'>#{user.uid.substring(0, 5)}</h3>
          </div>
        </div>
        <div className="Sidebar_profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
