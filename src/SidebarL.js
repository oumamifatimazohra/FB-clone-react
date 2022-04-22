import React from 'react';
import './SidebarL.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';



function SidebarL() {
  const [{ user }, dispach] =useStateValue();

  return (
    <div>
    <div className='Sidebar'>
    <SidebarRow avatar ImageLink={user.photoURL} title="Fatima-zohra Oumami" />
      <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Find friends" />
      <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" title="Marketplace" />
      <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" title="Pages" />
      <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups" />
      <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch" />
      
    </div>
    
    </div>
  )
}

export default SidebarL