import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NextRouter, useRouter } from "next/router";
import { IRouterQuery } from "../utils/tokenUrlParamNames";
import { useDispatch } from "react-redux";
import { setStreamingServiceToken } from "../actions/streamingServiceActions";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const index = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		if (router?.isReady) {
			const {
				query: { code },
			}: NextRouter | IRouterQuery = router;
			dispatch(setStreamingServiceToken(String(code)));
		}
	}, [router]);

	const classes = useStyles();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert(username);
	};

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleLogIn(e)}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
						) => setUsername(e.target.value)}
						value={username}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
						) => setPassword(e.target.value)}
						value={password}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default index;
