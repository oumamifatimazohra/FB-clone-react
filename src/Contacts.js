import React from 'react';
import './Contacts.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Contacts( { selected, ImageLinke, title1, avatar, avatar1} ) {
    return (
      <div className={`sidebarRow1 ${selected && "selected"} ${avatar && "avatar"}`} >
      <div className='colorwrap1'>
                    <img src={ImageLinke} alt="" className={`sidebarRow__icon1 ${avatar && "avatar"}`} />
                    <h2 className={`sidebarRow__title1 ${avatar && "avatar"}`}>{title1}</h2>

                </div>
      <div className={`enlign ${selected && "selected"} ${avatar1 &&"avatar"}`}>
                <FiberManualRecordIcon />
      </div>
      
        
      </div>
    )
  }
  

export default Contacts