import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Box from './components/Box';

function App() {
  const [list,setList] = useState<string[]>()
  // Initialize Firebase
  const config = process.env.REACT_APP_KEY
  let firebaseConfig = JSON.parse('{}');
  if(config){
    firebaseConfig = JSON.parse(config)
  }
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  useEffect(() => {
    async function a(){
      const col = collection(db,'logs')
      const snapshot = await getDocs(col);
      const logList = snapshot.docs.map(doc => doc.get("label"));
      setList(logList)
      console.log(list)
    }
    a()
  }, []);

  let boxList = []
  if(list){
    for(let i = 0; i < list.length; i++){
      boxList.push(<Box i={list[i]}/>)
    }
  }
  return (
    <>
      <Header/>
        {boxList}
      <Footer/>
    </>
  );
}

export default App;
