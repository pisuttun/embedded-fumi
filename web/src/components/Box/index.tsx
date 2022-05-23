import React from "react";
import { Typography } from "@mui/material";
import { Container } from "./styled"

export default function Box(props:{i:string}){
	return (
		<Container>
			<Typography variant="h4" style={{marginLeft:'5%',color:'white'}}>{props.i}</Typography>
		</Container>
	)

}
