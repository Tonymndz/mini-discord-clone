import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import faker from 'faker';
import axios from 'axios';

const IMAGE_API_URL = "https://source.unsplash.com/random"

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(login({ 
  //         uid: authUser.uid, 
  //         photo: authUser.photoURL, 
  //         email: authUser.email,
  //         displayName: authUser.displayName
  //       }))
  //     } else {
  //       dispatch(logout())
  //     }
  //   })
  // }, [dispatch])
  
  // if (!user)
  //   return <Login />
  

  useEffect(() => {
    (async () => {
      const randomImage = (await axios.get(IMAGE_API_URL)).request.responseURL
      console.log(randomImage)
      auth.signInAnonymously().then(guest => { 
        dispatch(login({
          uid: guest.user.uid,
          photo: randomImage,
          email: faker.internet.email(),
          displayName: faker.name.firstName() 
        }))
      }).catch(error => alert(error.message))
    })()
  }, [dispatch])

  if (!user)
    return <div style={{ background: '#36393f', height: '100vh'}} />

  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;