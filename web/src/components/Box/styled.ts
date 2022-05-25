import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')({
	display:'flex',
	flexDirection:'column',
	width:'80%',
	height:'10%',
	backgroundColor:'#404040',
	marginTop:'5vh',
	borderRadius:'10px',
	paddingLeft:'5%',
	paddingTop:'1%',
	boxShadow:'5px 5px 5px black',
})

export const ButtonGroup = styled('div')({
	display:'flex',
	flexDirection:'row-reverse',
	marginBottom:'1%',
	marginRight:'5%'
})

export const ModalContainer = styled('div')({
	display:'flex',
	position:'absolute',
	flexDirection:'column',
	alignItems:'center',
	width:'80%',
	top:'50%',
	left:'50%',
	paddingTop:'2vh',
	transform: 'translate(-50%, -50%)',
	borderRadius:'10px',
	backgroundColor:'white',
})

export const StyledButton = styled(Button)({
	backgroundColor:'red',
	color:'white',
	marginBottom:'1vh'
})

export const StyledText = styled(Typography)({
	color:'white',
})