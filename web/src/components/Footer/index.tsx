import React, { useState } from "react";
import { Typography, Switch } from "@mui/material";
import { Container } from "./styled"

export default function Footer(){
	const [arm,setArm] = useState(false);
	const onclickHandler = (x:boolean)=>{
		console.log("click",x)
		setArm(x)
	}
	
	let status = arm?"Enabled and online!":"Disabled"
	return(
		<Container>
			<Typography variant="h6" style={{marginLeft:'10%',color:'white'}}>{status}</Typography>
			<div style={{position:'absolute', right:'20%'}}>
				<Switch color="warning" onClick={()=>onclickHandler(!arm)}></Switch>
			</div>
		</Container>
	)
}
