import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password1: '',
		password2: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`user/register/`, {
				email: formData.email,
				user_name: formData.username,
				password1: formData.password1,
				password2: formData.password2
			})
			.then((res) => {
				history.push('/login');
				console.log(res);
				console.log(res.data);
			})
			.catch((err) => {
				alert("Rejestracja zakończona niepowodzeniem! Sprawdź jeszcze raz wpisane dane.")
			});
	


};

const classes = useStyles();

return (
	<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
			<Avatar className={classes.avatar}></Avatar>
			<Typography component="h1" variant="h5">
				Rejestracja
			</Typography>
			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="email"
							label="E-mail"
							name="email"
							autoComplete="email"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="username"
							label="Login"
							name="username"
							autoComplete="username"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password1"
							label="Hasło"
							type="password"
							id="password1"
							autoComplete="current-password"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password2"
							label="Powtórz hasło:"
							type="password"
							id="password2"
							autoComplete="current-password"
							onChange={handleChange}
						/>
						<p> Twoje hasło: </p>
						<p> * musi zawierać co najmniej 8 znaków </p>
						<p> * nie może być popularne (np. password, qwerty) </p>
						<p> * nie może składać się wyłącznie z cyfer </p>
						<p> * nie może być podobne do loginu lub adresu email </p>
					</Grid>
					<p> * - pola obowiązkowe</p>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Zarejestruj się
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Masz już konto? Zaloguj się!
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</div>
	</Container>
);
}