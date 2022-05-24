import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Box from './components/Box';
import { log } from './type';

function App() {
  const [list,setList] = useState<log[]>()
  // Initialize Firebase
  let firebaseConfig = {};
  firebaseConfig = process.env.REACT_APP_KEY? JSON.parse(process.env.REACT_APP_KEY):{}
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  useEffect(() => {
    async function fetchAll(){
      const col = collection(db,'logs')
      const snapshot = await getDocs(col);
      //const logList = snapshot.docs.map(doc => doc.get("label"));
      let logList:log[] = []
      for(let i of snapshot.docs){
        let temp:log = {id:i.id, 
                        sound:i.get("sound"), 
                        label:i.get("label"), 
                        datetime:i.get("datetime"), 
                        favorite:i.get("favorite"), 
                        checked:i.get("checked"), 
                      }
        logList.push(temp)
      }
      setList(logList)

    }
    fetchAll()
  }, []);

  let boxList = []
  if(list){
    for(let i = 0; i < list.length; i++){
      boxList.push(<Box data={list[i]}/>)
    }
  }
  return (
    <>
      <Header/>
        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
          {boxList}
        </div>
      <Footer/>
    </>
  );
}

export default App;
