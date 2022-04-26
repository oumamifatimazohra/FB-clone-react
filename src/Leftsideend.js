import React from 'react';
import './Leftsideend.css';
import SidebarRow from './SidebarRow';


function Leftsideend() {
  return (
    <div>
    <div className='sidebarleft'>
    <h3>Your shortcuts</h3>
    <SidebarRow avatar ImageLink="\images\258555828_100334705819098_2763591697800799780_n.png" title="HawaaPlus  حواء بلاس" />
    <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="JS Developers-JS Programmers" />
    <SidebarRow ImageLink="https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/118398662_115072160313255_6636364506302034872_n.jpg?stp=c20.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=106&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=Gmc2ouOs244AX824Lie&_nc_ht=scontent.ffez1-1.fna&oh=00_AT9e7vL1DFlknLHJuna7vn5HlDgNLgIU3dfWCrINUEL_ew&oe=627EA0CB" title="React Developers" />
    <SidebarRow ImageLink="https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/72580117_2449937788595820_5737933847685758976_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=5hLz-MNyIGkAX9F20oh&_nc_ht=scontent.ffez1-1.fna&oh=00_AT8GfP5AB6FF7pBv5ae1aZpSkYznqZ-KP7ArPvIo7z6xcA&oe=627E6015" title="React.js Developers" />
    <SidebarRow ImageLink="https://scontent.ffez1-2.fna.fbcdn.net/v/t1.6435-9/33105813_1918737428201511_1687826614370435072_n.jpg?stp=c12.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=_oUM99BN2gAAX-589Id&_nc_ht=scontent.ffez1-2.fna&oh=00_AT8r0-dU9kMN5ke8JeCHC6QHyZHEVhEmryBsDPJYWc8UmA&oe=627EB0D3" title="React.JS developers -2021" />
      
      </div>
          <div className='sidebar2'>
              <div className="sidebar2__policies">
                  <a href="/">Privacy · </a>
                  <a href="/">Terms · </a>
                  <a href="/">Advertising · </a>
                  <a href="/">AdChoices · </a>
                  <a href="/">Cookies · </a>
                  <a href="/">More</a>
              </div>
              <p className="copyright">Meta © 2022</p>
          </div>
    </div>
  )
}

export default Leftsideend