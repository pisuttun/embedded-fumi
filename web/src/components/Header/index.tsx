import React,{ useState } from "react";
import { Tooltip, Typography } from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ButtonContainer, Container, StyledButton } from "./styled"

export default function Header(){
	const [click,setClick] = useState(1);
	const onclickHandler = (num:number)=>{
		//console.log("click",num)
		setClick(num)
	}

	let buttonList = []
	const icons = [<div/>,<PriorityHighIcon fontSize="large"/>, <StarBorderIcon fontSize="large"/>, <AccessTimeIcon fontSize="large"/>]
	const name = ["", "Notification","Favorite","History"]
	for(let i = 1; i <= 3; i++){
		if(click === i)
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
			<Typography variant="h2">HS</Typography>
			<ButtonContainer>
				{buttonList}
			</ButtonContainer>
		</Container>
	)
}

