import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { Menu } from "@material-ui/core";
import { Picker } from "emoji-mart";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "emoji-mart/css/emoji-mart.css";
import './EmojiPopUp.css'

const EmojiPopUp = ({ input, addEmojiToInput }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  const onEmojiSelect = (evt) => {
    const emoji = evt.native;
    addEmojiToInput(emoji)
    popupState.close(evt)
  }

  return (
    <div className='EmojiPopUp'>
      <EmojiEmotionsIcon fontSize="large"  {...bindTrigger(popupState)} />
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right', }}
      >
        <Picker style={{ background: '#2f3136', borderColor: "#202225" }}
        set='twitter' 
        onSelect={onEmojiSelect}
        theme="dark"
        />
      </Menu>
    </div>
  )
} 

export default EmojiPopUp;