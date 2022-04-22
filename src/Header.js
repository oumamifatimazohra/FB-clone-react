import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Avatar, IconButton } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { SiMessenger ,SiFacebookgaming } from 'react-icons/si';
import {IoApps} from 'react-icons/io5';
import { useStateValue } from './StateProvider';





function Header() {
  const [{ user }, dispach] =useStateValue();

  return (
    <nav>
    <div className='header'>
        <div className="header__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
            alt="FB-Logo"
          />
          <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search Facebook" className="header__input__text" />
          </div>
        </div>
      <div className='header__middle'>
        <div className='header__option header__option--active'>
          
           <HomeIcon fontSize='large' />
      
          
        </div>
        <div className='header__option '>
       
        <PeopleOutlineIcon fontSize='large' />
     
         
        </div>
        <div className='header__option '>
   
        <SubscriptionsOutlinedIcon fontSize='large' />
          
        </div>
        <div className='header__option '>
     
        <StorefrontOutlinedIcon fontSize='large' />

        </div>
        <div className='header__option '>

        <SiFacebookgaming fontSize='x-large' />

         
        </div>

      </div>
       <div className='header__right'>
         <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>Fatima-zo...</h4>
         </div>
         <IconButton className='iconbutt'>
          <IoApps />
         </IconButton>

         <IconButton className='iconbutt'>
         <SiMessenger />
         </IconButton>

         <IconButton className='iconbutt'>
         <NotificationsRoundedIcon />
         </IconButton>

         <IconButton className='iconbutt'>
          <ArrowDropDownOutlinedIcon />
         </IconButton>
       </div>
    </div>
    </nav>
    
  )
}

export default Header
