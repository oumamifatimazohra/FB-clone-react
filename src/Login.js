import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
  const [state, dispach]= useStateValue();

    const signIn = () =>{
        //sign in ...
      auth.signInWithPopup(provider)
      .then(result => {
          dispach({
              type: actionTypes.SET_USER,
              user: result.user,
          })
      }).catch(error => alert(error.message));
    };
  return (
    <div className='login'>
      <div className='login__logo'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' />
      <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' />
      </div>
      <Button className='login__button' type="submit" onClick={signIn}>
      Sign In
      </Button>
    </div>
  )
}

export default Login