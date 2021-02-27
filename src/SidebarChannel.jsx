import React from 'react'
import { setChannelInfo } from './features/appSlice';
import { useDispatch } from 'react-redux'
import './SidebarChannel.css'

function SidebarChannel({ id, channelName, isSelectedChannel, selectChannel }) {
  const dispatch = useDispatch();
  const onChannelClick = () => {
    selectChannel()
    dispatch(setChannelInfo({ channelId: id, channelName }))
  }

  return (
    <div className={`SidebarChannel${isSelectedChannel ? '-active' : '-unactive'}`} onClick={onChannelClick}>
      <h4><span className="SidebarChannel_hash">#</span>{channelName}</h4>
    </div>
  )
}

export default SidebarChannel
