import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')({
	display:'flex',
	position:'absolute',
	flexDirection:'column',
	alignItems:'center',
	justifyContent:'center',
	width:'80%',
	height:'50%',
	top:'50%',
	left:'50%',
	paddingTop:'2vh',
	transform: 'translate(-50%, -50%)',
	borderRadius:'10px',
	backgroundColor:'#FAFAFA',
})

export const SignInButton = styled(Button)({
	color:'white',
	backgroundColor:'#1A73E8',
})