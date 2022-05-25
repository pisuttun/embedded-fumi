import React, { useState } from "react";
import { Typography, Switch } from "@mui/material";
import { Container, StyledButton } from "./styled"
import { firebaseConfig } from '../../config';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default function Footer(){
	const [arm,setArm] = useState(false);
  	const app = initializeApp(firebaseConfig);
  	const auth = getAuth(app)
	const onclickHandler = (x:boolean)=>{
		console.log("click",x)
		setArm(x)
	}
	
	let status = arm?"Enabled and online!":"Disabled"
	return(
		<Container>
			<Typography variant="h6" style={{marginLeft:'10%',color:'white'}}>{status}</Typography>
			<div style={{position:'absolute', right:'30%'}}>
				<Switch color="warning" onClick={()=>onclickHandler(!arm)}></Switch>
			</div>
			<div style={{position:'absolute', right:'10%'}}>
				<StyledButton onClick ={()=>auth.signOut()} variant="outlined">Log out</StyledButton>
			</div>
		</Container>
	)
}
