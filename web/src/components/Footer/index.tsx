import React from "react";
import { Container, StyledButton } from "./styled"
import { firebaseConfig } from '../../config';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default function Footer(){
  	const app = initializeApp(firebaseConfig);
  	const auth = getAuth(app)
	
	return(
		<Container>
			<div style={{position:'absolute', right:'10%'}}>
				<StyledButton onClick={()=>auth.signOut()} variant="outlined">Log out</StyledButton>
			</div>
		</Container>
	)
}
