import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axiosInstance from '../../../axios';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
		fontStyle: 'bold'
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
	photo: {
		width: '20px',
		height: '20px'
	}
}));

export default function ModeratorGames() {

	const [games, setGamesState] = useState({
		games: []
	});

	useEffect(() => {
		axiosInstance.get("http://localhost:8000/api/get_all_games").then((res) => {
			const allGames = res.data;
			setGamesState({ games: allGames });
			console.log(res.data);
		});
	}, [setGamesState]);

	const classes = useStyles();

	if (!games.games || games.games.length === 0) return <p>Nie znaleziono rozgrywek</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell>Db_id</TableCell>
									<TableCell align="left">Nazwa</TableCell>
									<TableCell align="left">Logo</TableCell>
									<TableCell align="left">Akcje</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{games.games.map((game) => {
									return (
										<TableRow>
											<TableCell component="th" scope="row">
												{game.game_id}
											</TableCell>
											<TableCell align="left">{game.db_game_id}</TableCell>
											<TableCell align="left">{game.name}</TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'http://localhost:8000' + game.logo}
													className={classes.link}
												>
													{game.logo}
												</Link>
											</TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/moderator/edit_game/' + game.game_id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/moderator/delete_game/' + game.game_id}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/moderator/create_game'}
											variant="contained"
											color="primary"
										>
											Dodaj rozgrywki
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment >
	);
}

