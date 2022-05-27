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
	backgroundColor:'#F0F0F0',
})

export const SignInButton = styled('div')({
	display:'flex',
	alignItems:'center',
	justifyContent:'center',
	backgroundColor:'white',
	border:'1px solid black',
	width:'60%',
	height:'5vh',
	borderRadius:'10px'
})