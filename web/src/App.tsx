import React from 'react';
import { firebaseConfig } from './config';
import { initializeApp } from "firebase/app";
import MainPage from './components/MainPage';
import { Container, SignInButton } from './styled'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { Typography } from '@mui/material';

function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const [user] = useAuthState(auth)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider);
  }
  function SignIn(){
    return (
      <Container>
        <Typography variant="h5" style={{marginBottom:'3vh'}}>House's Sentinel</Typography>
        <SignInButton variant="outlined" onClick={signInWithGoogle}>Sign in with Google</SignInButton>
      </Container>
    )
  }
  function validAccount(){
    const validAccount = ["pisuttun@gmail.com", "priasdevo@gmail.com", "priasdevo@gmail.com"]
    //console.log(auth.currentUser?.email)
    if(auth.currentUser?.email){
      if(validAccount.includes(auth.currentUser.email)){
        return true
      }
      auth.signOut()
      alert("Access denied")
    }
    return false
  }
  return (
    <>
      {!user&&<SignIn/>}   
      {user && (validAccount()? <MainPage/>:<SignIn/>)}
    </>
  );
}


export default App;
