import React, { useEffect, useState } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { firebaseConfig } from '../../config';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Box from '../Box';
import { log } from '../../type';
export default function MainPage() {
  const [list, setList] = useState<log[]>([])
  const [mode, setMode] = useState(1)
  // Initialize Firebase
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
                        type:i.get("type"), 
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
  const sortedList = list.sort(compare)

  let boxList = []
  if(list){
    for(let i of sortedList){
      if(mode === 1 && i.checked === false)
        boxList.push(<Box data={i}/>)
      if(mode === 2 && i.favorite)
        boxList.push(<Box data={i}/>)
      if(mode === 3)
        boxList.push(<Box data={i}/>)
    }
  }
  return (
    <>
      <Header mode={mode} setMode={setMode}/>
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', marginBottom:'15vh', marginTop:'10vh'}}>
          {boxList}
        </div>
      <Footer/>
      </>
  );
}

function compare(a:log, b:log){
  if(a.datetime > b.datetime)
    return -1;
  if(a.datetime < b.datetime)
    return 1;
  return 0;
}