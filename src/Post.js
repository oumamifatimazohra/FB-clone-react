import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {RiShareForwardLine} from 'react-icons/ri';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function Post({profilePic, image, username, message}) {
  const timestamp =new Date().toUTCString();
  return (
    <div className='post'>
     <div className='post__top'>
     <Avatar src={profilePic} className='post__avatar'
     />
     <div className='post__topInfo'>
     <h3>{username}</h3>
     <span><p>{timestamp}</p><PublicIcon /></span>
     </div>
     </div>
    
    <div className='post__bottom'>
    <p>{message}</p>
    </div>
    
    <div className='post__image'>
    <img src={image} alt="" />
    </div>
     
    <div className='post__options'>
      <div className='post__option'>
       <ThumbUpOffAltIcon />
       <p>Like</p>
      </div>
      <div className='post__option'>
       <ChatBubbleOutlineIcon />
       <p>Comment</p>
      </div>
      <div className='post__option'>
       <RiShareForwardLine  />
       <p>Share</p>
      </div>
      <div className='post__option'>
       <AccountCircleIcon />
       <ExpandMoreOutlinedIcon />
       
      </div>
    </div>

    </div>
  )
}

export default Post