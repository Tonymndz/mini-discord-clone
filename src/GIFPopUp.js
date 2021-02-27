import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { Menu } from "@material-ui/core";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ReactGiphySearchbox from "react-giphy-searchbox";
import "emoji-mart/css/emoji-mart.css";
import './GIFPopUp.css'

const GIFPopUp = ({ sendEmoji }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  const onGIFSelect = (EmojiLink) => {
    sendEmoji(EmojiLink);
    popupState.close()
  }

  return (
    <div className='GIFPopUp'>
      <CardGiftcardIcon fontSize="large"  {...bindTrigger(popupState)} />
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right', }}
      >
      <div className="searchboxWrapper">
        <ReactGiphySearchbox
          apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
          onSelect={(item) => onGIFSelect(item.images.original.url)}
          masonryConfig={[
            { columns: 2, imageWidth: 110, gutter: 5 },
            { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
          ]}
        />
      </div>
      </Menu>
    </div>
  )
} 

export default GIFPopUp;