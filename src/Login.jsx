import { Button } from '@material-ui/core'
import { auth, provider } from './firebase';
import asd from './discord_logo.png'
// import zxc from './discord-clone.png'
import React from 'react'
import "./Login.css"

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(err => alert(err.message))
  }

  return (
    <div className="Login">
      <div className="Login_logo">
        <img src={asd} width="600" alt="Logo" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
