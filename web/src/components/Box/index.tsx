import React, { useState } from "react";
import { Container, ButtonGroup, StyledText, ModalContainer, StyledButton } from "./styled"
import StarIcon from '@mui/icons-material/Star';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import { log } from "../../type";
import { firebaseConfig } from '../../config';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore/lite';
import { Modal, TextField, Button, Typography } from "@mui/material";

export default function Box(props:{data:log}){
	const datetime = props.data.datetime.slice(0,-7)
	const [label, setLabel] = useState('')
	const [check, setCheck] = useState(false)
	const [fav, setFav] = useState(false)
	//Init firebase
  	const app = initializeApp(firebaseConfig);
  	const db = getFirestore(app)
	const ref = doc(db,"logs",props.data.id)
	//Modal
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('')
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
	//Delete comfirmation dialog
	const [open2, setOpen2] = useState(false);
  	const handleOpen2 = () => setOpen2(true);
  	const handleClose2 = () => setOpen2(false);
	
	async function changeName(){
		await updateDoc(ref,{
			label:name
		})
		console.log(name)
		setLabel(name)
		refresh()
		handleClose()
	}
	async function toggleCheck(){
		await updateDoc(ref,{
			checked:!check
		})
		refresh()
	}
	async function toggleFav(){
		await updateDoc(ref,{
			favorite:!fav
		})
		refresh()
	}
	async function deletedocs(){
		await deleteDoc(ref)
		handleClose2()
		window.location.reload()
	}
	async function refresh(){
		const doc = await getDoc(ref)
		setLabel(doc.get("label"))
		setCheck(doc.get("checked"))
		setFav(doc.get("favorite"))
	}
	refresh()

	return (
		<Container>
			<StyledText style={{alignSelf:'flex-end', marginRight:'3%'}}>{datetime}</StyledText>
			<StyledText variant="h4">{label}</StyledText>
			<StyledText onClick={handleOpen} style={{textDecoration:'underline'}}>Tap to label</StyledText>
			<Modal open={open} onClose={handleClose}>
				<ModalContainer>
					<Typography style={{alignSelf:'flex-start', marginLeft:'5%'}}>Enter new name:</Typography>
					<TextField onChange={(e)=>setName(e.target.value)} variant="filled" style={{width:'80%'}}/> 
					<Button onClick={changeName}>Change Name</Button>
				</ModalContainer>
			</Modal>
			<Modal open={open2} onClose={handleClose2}>
				<ModalContainer>
					<Typography style={{alignSelf:'flex-start', marginLeft:'5%'}}>Permanently delete this log? This action cannot be undone</Typography>
					<StyledButton onClick={deletedocs}>Delete</StyledButton>
				</ModalContainer>
			</Modal>
			<ButtonGroup>
				<DeleteForeverIcon onClick={handleOpen2} fontSize="large" style={{color:'white'}}/>
				{check? 
					<CheckIcon onClick={toggleCheck} fontSize="large" style={{color:'green'}}/>:
					<CheckIcon onClick={toggleCheck} fontSize="large" style={{color:'white'}}/>
				}
				{fav?
					<StarIcon onClick={toggleFav} fontSize="large" style={{color:'yellow'}}/>:
					<StarIcon onClick={toggleFav} fontSize="large" style={{color:'white'}}/>
				}
				<StyledText style={{marginLeft:'0',marginRight:'auto'}}>{'- '+props.data.type}</StyledText>
			</ButtonGroup>
		</Container>
	)
}
