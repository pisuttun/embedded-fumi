import React from "react";
import { Tooltip } from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import logo from './logo.png'
import { ButtonContainer, Container, StyledButton } from "./styled"

export default function Header(props:{mode:number, setMode:(num:number)=>void}){
	const onclickHandler = (num:number)=>{
		console.log("click",num)
		props.setMode(num)
	}

	let buttonList = []
	const icons = [<div/>,<PriorityHighIcon fontSize="large"/>, <StarBorderIcon fontSize="large"/>, <AccessTimeIcon fontSize="large"/>]
	const name = ["", "Notification","Favorite","History"]
	for(let i = 1; i <= 3; i++){
		if(props.mode === i)
			buttonList.push(
				<Tooltip title={name[i]} placement="top">
					<StyledButton onClick={()=>onclickHandler(i)} style={{backgroundColor:'#4c4c4c'}}>
						{icons[i]}
					</StyledButton>
				</Tooltip>
			)
		else
			buttonList.push(
				<Tooltip title={name[i]} placement="top">
					<StyledButton onClick={()=>onclickHandler(i)}>
						{icons[i]}
					</StyledButton>
				</Tooltip>
			)
	}
	return(
		<Container>
			<img src={logo} alt="logo" style={{height:'100%', marginLeft:'5%'}}/>
			<ButtonContainer>
				{buttonList}
			</ButtonContainer>
		</Container>
	)
}

