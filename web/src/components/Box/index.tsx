import React, { useRef, useState } from "react";
import { Container, ButtonGroup, StyledText, ModalContainer } from "./styled"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import { log } from "../../type";
import { Modal, TextField, Button, Typography } from "@mui/material";

export default function Box(props:{data:log}){
	const datetime = props.data.datetime.split(',')[1].slice(0,-4)
	const [name, setName] = useState('')
	const [open, setOpen] = useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
	
	const changeName = () => {
		//TODO: change label in firebase firestore
		console.log(name)
		handleClose()
	}
	return (
		<Container>
			<StyledText style={{alignSelf:'flex-end', marginRight:'1%'}}>{datetime}</StyledText>
			<StyledText variant="h4" >{props.data.label}</StyledText>
			<StyledText onClick={handleOpen}>Tap to label</StyledText>
			<Modal open={open} onClose={handleClose}>
				<ModalContainer>
					<StyledText>modal test</StyledText>
					<Typography></Typography>
					<TextField onChange={(e)=>setName(e.target.value)} variant="filled" style={{width:'80%'}}/> 
					<Button onClick={changeName}>Change Name</Button>
				</ModalContainer>
			</Modal>
			<ButtonGroup>
				<DeleteForeverIcon fontSize="large" style={{color:'white'}}/>
				<CheckIcon fontSize="large" style={{color:'white'}}/>
				<StarBorderIcon fontSize="large" style={{color:'white'}}/>
			</ButtonGroup>
		</Container>
	)
}
