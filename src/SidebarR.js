import React from 'react';
import'./SidebarR.css';
import SidebarRow from './SidebarRow';
import Contacts from './Contacts';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


function SidebarR() {
  return (
      <div className='side_right'>
          <div className='right_side'>
          <div className='sidebar__right'>
              <div className='S_R'>
                  <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png' />
                  <h5>Groupes</h5>
                  <p>.Suggested for you</p>
                  <CloseIcon />
              </div>
              <div className='s_r'>
                  <img src='https://scontent.xx.fbcdn.net/v/t1.6435-9/183080882_2220452588090327_5839549957080514626_n.png?stp=dst-png_p296x100&_nc_cat=106&ccb=1-5&_nc_sid=8631f5&_nc_ohc=RXBqNntw9OQAX98npGZ&_nc_oc=AQlNbv-TZLof8wmF26N2q_f5p_5M7EfX-IwxnBI7c3QDPX4QoiZBI-btDwInEhxOBppOvOcTkSOjZSBJHfUWEotK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT-1IvoTzPDdMCZi8xwWjdS0tMce6eAfjJPFh68uBrjVYQ&oe=627C9C08' />
              </div>
              <div><h4>Laravel Developers</h4></div>
              <div className='S_R'><p>45 K members .+ de  publication par jour</p></div>
              <div className='buttn'> <button>Join group</button></div>
          </div>
          <hr />
          <div className='sidebar__right_1'>
            <h3>Sponsored</h3>
            <div className='sidebar__right_1-1'>
            <div className='sidebar__right_1-1_img'><img src='\images\275964360_7094445207263130_34396444298373448_n.jpg' /></div>
            <div className='sidebar__right_1-1_dis'>
            <h4>SHEIN</h4>
            <p>ma.shein.com</p>
            </div>
            </div>
          </div>

          <div className='sidebar__right_2'>
           
            <div className='sidebar__right_2-1'>
            <div className='sidebar__right_2-1_img'><img src='\images\277691151_6283609006667_8051353692747504248_n.jpg' /></div>
            <div className='sidebar__right_2-1_dis'>
            <h4>Gagnez des cadeaux incroyables en...</h4>
            <p>particulier.groupebcp.com</p>
            </div>
            </div>
          </div>
          <hr />
          <div className='your_page'>
          <div className='your_page_head'><h3>Your Pages</h3> <MoreHorizIcon /></div>
          <div className='your_page_body'>
          <SidebarRow avatar ImageLink="\images\258555828_100334705819098_2763591697800799780_n.png"  title="HawaaPlus حواء بلاس" />
          </div>
          <div className='your_page_bottom'>
          <CampaignOutlinedIcon />
          <p>Create promotion</p>
          </div>
          </div>
          <hr />
      
          <div className='contacts'>
              <div className='contacts_head'>
                  <div>
                      <h3>Contacts</h3>
                  </div>
                  <div className='icons'>
                      <VideoCallIcon className='icons1' />
                      <SearchIcon className='icons2' />
                      <MoreHorizIcon className='icons3' />
                  </div>
                  
              </div>
              <div className='contacts_members'>
              <Contacts className="member" avatar ImageLinke="\images\272580929_1350941415369877_3785606875992425350_n.jpg" title1="Hassna Hassani"  />
              <Contacts className="member1" avatar ImageLinke="\images\276214000_5018676384892504_4966664814143471324_n.jpg" title1="Haker Algreria" />
              <Contacts className="member2" avatar ImageLinke="\images\272822568_4588629787915117_4723839639350027983_n.jpg" title1="Anoir Bk" />
              <Contacts className="member" avatar ImageLinke="\images\272580929_1350941415369877_3785606875992425350_n.jpg" title1="Lahcen Elkabouri" />
              <Contacts className="member" avatar ImageLinke="\images\276214000_5018676384892504_4966664814143471324_n.jpg" title1="Darien K.Saleh" />
              <SidebarRow className="member" avatar ImageLink="\images\272822568_4588629787915117_4723839639350027983_n.jpg" title="Anoir Bk" />
              <SidebarRow className="member" avatar ImageLink="\images\272580929_1350941415369877_3785606875992425350_n.jpg" title="Hassna Hassani" />
              <SidebarRow className="member" avatar ImageLink="\images\276214000_5018676384892504_4966664814143471324_n.jpg" title="Haker Algreria" />
              <SidebarRow className="member" avatar ImageLink="\images\272822568_4588629787915117_4723839639350027983_n.jpg" title="Anoir Bk" />
              </div>
              <hr />
              <div className='sidebareRi_end'>
               <h3>Group conversations</h3>
               <div className='create_group'>
               <AddIcon />
               <h4>Create new group</h4>
               </div>
              </div>
          </div>
           
          </div>

      </div>
    
  )
}

export default SidebarR