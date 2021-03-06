import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory, useParams } from 'react-router-dom';
//MaterialUI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import jwt_decode from "jwt-decode";


export default function Delete() {
	const history = useHistory();
	const { username } = useParams();
	let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
	let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)


	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete('http://localhost:8000/api/user/deleteuser/' + username)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
				setAuthTokens(null)
				setUser(null)
				localStorage.removeItem('authTokens')
				history.push('/')
				// history.push({
				// 	pathname: 'http://localhost:3000',
				// });
				window.location.reload();
			});
	};

	return (
		<Container component="main" maxWidth="sm">
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Box
				display="flex"
				justifyContent="center"
				m={1}
				p={1}
				bgcolor="background.paper"
			>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					onClick={handleSubmit}
				>
					Naciśnij, jeśli chcesz usunąć
				</Button>
			</Box>
		</Container>
	);
}