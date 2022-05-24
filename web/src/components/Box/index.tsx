import React from "react";
import { Container, ButtonGroup, StyledText } from "./styled"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import { log } from "../../type";

export default function Box(props:{data:log}){
	const datetime = props.data.datetime.split(',')[1].slice(0,-4)
	return (
		<Container>
			<StyledText style={{alignSelf:'flex-end', marginRight:'1%'}}>{datetime}</StyledText>
			<StyledText variant="h4" >{props.data.label}</StyledText>
			<StyledText>Tap to label</StyledText>
			<ButtonGroup>
				<DeleteForeverIcon fontSize="large" style={{color:'white'}}/>
				<CheckIcon fontSize="large" style={{color:'white'}}/>
				<StarBorderIcon fontSize="large" style={{color:'white'}}/>
			</ButtonGroup>
		</Container>
	)
}
