import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const Container = styled('div')({
	display:'flex',
	position:'fixed',
	bottom:'0',
	alignItems:'center',
	width:'100%',
	height:'10vh',
	backgroundColor:'#4e5593',
})

export const StyledButton = styled(Button)({
	backgroundColor:'white',

})