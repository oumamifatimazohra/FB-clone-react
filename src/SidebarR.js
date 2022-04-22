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
            <div className='sidebar__right_1-1_img'><img src='https://scontent.ffez2-2.fna.fbcdn.net/v/t45.1600-4/194484182_23848002198700391_4322638678952833879_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=RPxtUOzpX2YAX-HwD0M&_nc_ht=scontent.ffez2-2.fna&oh=00_AT8BN0gsu7zKbB_yeBPLfsIn2pafoFCf1epRXtCquJjj_A&oe=625AECE3' /></div>
            <div className='sidebar__right_1-1_dis'>
            <h4>NFT Marketplace</h4>
            <p>crypto.com</p>
            </div>
            </div>
          </div>

          <div className='sidebar__right_2'>
           
            <div className='sidebar__right_2-1'>
            <div className='sidebar__right_2-1_img'><img src='https://scontent.ffez2-1.fna.fbcdn.net/v/t45.1600-4/273867878_23849559569360395_731277632255454315_n.jpg?stp=dst-jpg_p284x149&_nc_cat=103&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=tscWUnfQq0kAX_Pd9OH&tn=8r9Ql4uYHlM7zqn_&_nc_ht=scontent.ffez2-1.fna&oh=00_AT8_UNM2NNhpzDB2jbqKq1JVPmayXHSOCc5Gqo_c2jn29g&oe=625B4DB0' /></div>
            <div className='sidebar__right_2-1_dis'>
            <h4>Développez votre  1ére application</h4>
            <p>institute.proximity-management.com</p>
            </div>
            </div>
          </div>
          <hr />
          <div className='your_page'>
          <div className='your_page_head'><h3>Your Pages</h3> <MoreHorizIcon /></div>
          <div className='your_page_body'>
          <SidebarRow avatar ImageLink="https://scontent.xx.fbcdn.net/v/t39.30808-1/258555828_100334705819098_2763591697800799780_n.png?stp=cp0_dst-png_p50x50&_nc_cat=110&ccb=1-5&_nc_sid=05dcb7&_nc_ohc=cubRPMbIZWIAX8w9J76&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT_-D6x_-MgwAC_gBKWCm1GNVmFkGeA-qiy5elTH3VgIeg&oe=625A9A0C"  title="HawaaPlus حواء بلاس" />
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
              <Contacts className="member" avatar ImageLinke="https://scontent.ffez2-2.fna.fbcdn.net/v/t39.30808-1/277525369_1591666084528593_4612971861183522430_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8wYTRDldJJQAX-OIL0b&_nc_ht=scontent.ffez2-2.fna&oh=00_AT_W9xbOAT6POq3XfZAkaQh1OTdJAqt_t45pFRaTmK64Gw&oe=625A4E81" title1="Hassna Hassani"  />
              <Contacts className="member1" avatar ImageLinke="https://scontent.ffez2-2.fna.fbcdn.net/v/t39.30808-1/276021004_373720687929091_2972986559751977967_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=lhkdKGeWx4UAX8B8VFd&_nc_ht=scontent.ffez2-2.fna&oh=00_AT_uudPtiPCJxoeewhjF51AogDZx_1ENuDSM4Gq62lfsbw&oe=625ACA5B" title1="Haker Algreria" />
              <Contacts className="member2" avatar ImageLinke="https://scontent.ffez2-1.fna.fbcdn.net/v/t39.30808-1/271378457_2959338334327081_4521315676327595768_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qiRYyfgYt0QAX_kJPTo&_nc_ht=scontent.ffez2-1.fna&oh=00_AT-mSgOvCJKzl3hzURwIu89Qvnm9_b28ZTrNkWIc2gXOxw&oe=625A79AD" title1="Anoir Bk" />
              <Contacts className="member" avatar ImageLinke="https://scontent.ffez2-2.fna.fbcdn.net/v/t39.30808-1/275261410_2201909353347218_2550839117087242453_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=_XY6upq5yD0AX8IKW2W&_nc_ht=scontent.ffez2-2.fna&oh=00_AT_F2irwFEJ0WxFurWY1l1J8qEmSxmCEzPUsunD94DSDAQ&oe=6259B555" title1="Lahcen Elkabouri" />
              <Contacts className="member" avatar ImageLinke="https://scontent.ffez2-2.fna.fbcdn.net/v/t39.30808-1/272822568_4588629787915117_4723839639350027983_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=slOZ5XJpf6sAX9y7inm&_nc_ht=scontent.ffez2-2.fna&oh=00_AT9U8HoKzVoVbQbRoJXu_iX8_-XTLcWZkzohIiS2BxYoVQ&oe=625B0C28" title1="Darien K.Saleh" />
              <SidebarRow className="member" avatar ImageLink="https://scontent.ffez2-1.fna.fbcdn.net/v/t39.30808-1/271378457_2959338334327081_4521315676327595768_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qiRYyfgYt0QAX_kJPTo&_nc_ht=scontent.ffez2-1.fna&oh=00_AT-mSgOvCJKzl3hzURwIu89Qvnm9_b28ZTrNkWIc2gXOxw&oe=625A79AD" title="Anoir Bk" />
              <SidebarRow className="member" avatar ImageLink="https://scontent.ffez2-2.fna.fbcdn.net/v/t39.30808-1/277525369_1591666084528593_4612971861183522430_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8wYTRDldJJQAX-OIL0b&_nc_ht=scontent.ffez2-2.fna&oh=00_AT_W9xbOAT6POq3XfZAkaQh1OTdJAqt_t45pFRaTmK64Gw&oe=625A4E81" title="Hassna Hassani" />
              <SidebarRow className="member" avatar ImageLink="https://scontent.ffez2-2.fna.fbcdn.net/v/t39.30808-1/276021004_373720687929091_2972986559751977967_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=lhkdKGeWx4UAX8B8VFd&_nc_ht=scontent.ffez2-2.fna&oh=00_AT_uudPtiPCJxoeewhjF51AogDZx_1ENuDSM4Gq62lfsbw&oe=625ACA5B" title="Haker Algreria" />
              <SidebarRow className="member" avatar ImageLink="https://scontent.ffez2-1.fna.fbcdn.net/v/t39.30808-1/271378457_2959338334327081_4521315676327595768_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qiRYyfgYt0QAX_kJPTo&_nc_ht=scontent.ffez2-1.fna&oh=00_AT-mSgOvCJKzl3hzURwIu89Qvnm9_b28ZTrNkWIc2gXOxw&oe=625A79AD" title="Anoir Bk" />
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