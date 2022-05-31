import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')({
	display:'flex',
	position:'fixed',
	top:'0',
	width:'100%',
	height:'10vh',
	backgroundColor:'#4e5593',
})

export const ButtonContainer = styled('div')({
	display:'flex',
	marginLeft:'auto',
	marginRight:'10%',
	marginTop:'auto',
})

export const StyledButton = styled(Button)({
	height:'80%',
	marginLeft:'5%',
	color:'white',
	borderRadius:'10px 10px 0px 0px',
})