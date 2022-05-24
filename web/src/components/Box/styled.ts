import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled('div')({
	display:'flex',
	flexDirection:'column',
	width:'80%',
	height:'10%',
	backgroundColor:'#404040',
	marginTop:'2%',
	borderRadius:'10px',
	paddingLeft:'5%',
	paddingTop:'1%',
	boxShadow:'5px 5px black',
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
	top:'50%',
	left:'50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor:'white',
})
export const StyledText = styled(Typography)({
	color:'white',
})