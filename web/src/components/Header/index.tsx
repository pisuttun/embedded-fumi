import React,{ useState } from "react";
import { Typography } from "@mui/material";
import { ButtonContainer, Container, StyledButton } from "./styled"

export default function Header(){
	const [click,setClick] = useState(1);
	const onclickHandler = (num:number)=>{
		console.log("click",num)
		setClick(num)
	}

	let buttonList = []
	for(let i = 1; i <= 3; i++){
		if(click === i)
			buttonList.push(<StyledButton onClick={()=>onclickHandler(i)} style={{backgroundColor:'#4c4c4c'}}>{i}</StyledButton>)
		else
			buttonList.push(<StyledButton onClick={()=>onclickHandler(i)}>{i}</StyledButton>)
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

