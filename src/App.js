import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import SidebarL from './SidebarL';
import Seemore from './Seemore';
import Leftsideend from './Leftsideend';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Feed from './Feed';
import SidebarR from './SidebarR';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispach] =useStateValue();
  const [isToggle, setIsToggle] = useState(false)
  return (
  
    <div>
    {!user ? (
      <Login />
      ) : ( 

          <div>
            <div className='app'>
              <Header />
            </div>
            <div className='components__body'>
              <div className='component__sidebar'>
                <div className='left_side'>
                  <SidebarL shown={<Header />} />
                  {isToggle && <Seemore />}
                  <button onClick={() => setIsToggle(!isToggle)}>
                    <div className='ic'>{isToggle ? <KeyboardArrowUpIcon id='up' /> : <KeyboardArrowDownIcon id='down' />}</div>
                    <div className='text'>See {isToggle ? 'Less' : 'More'}</div>
                  </button>
                  <hr />
                  <Leftsideend />
                </div>
              </div>

              <div className='component__feed'>
                <Feed />
              </div>
              <div className='component__widget'>
               <SidebarR />

            


              </div>
            </div>
          </div>
      )}
   
  </div>
  );
}

export default App;
