import React,{ useState } from "react";
import { Typography } from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ButtonContainer, Container, StyledButton } from "./styled"

export default function Header(){
	const [click,setClick] = useState(1);
	const onclickHandler = (num:number)=>{
		console.log("click",num)
		setClick(num)
	}

	let buttonList = []
	const icons = [<div/>,<PriorityHighIcon fontSize="large"/>, <StarBorderIcon fontSize="large"/>, <AccessTimeIcon fontSize="large"/>]
	for(let i = 1; i <= 3; i++){
		if(click === i)
			buttonList.push(<StyledButton onClick={()=>onclickHandler(i)} style={{backgroundColor:'#4c4c4c'}}>{icons[i]}</StyledButton>)
		else
			buttonList.push(<StyledButton onClick={()=>onclickHandler(i)}>{icons[i]}</StyledButton>)
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

