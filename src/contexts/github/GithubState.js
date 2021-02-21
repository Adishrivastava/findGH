import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

let githubClientId;
let githubClientSecret;

githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Search Users
	const searchUsers = async (text) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		dispatch({
			type: 'SEARCH_USERS',
			payload: res.data.items,
		});
	};

	// Get User
	const getUser = async (username) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		dispatch({
			type: 'GET_USER',
			payload: res.data,
		});
	};

	// Get Repos
	const getUserRepos = async (username) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);

		dispatch({
			type: 'GET_REPOS',
			payload: res.data,
		});
	};

	//set alerts for search
	const doAlert = (msg, type) => {
		dispatch({
			type: 'SET_ALERT',
			payload: { type: type, msg: msg },
		});

		setTimeout(
			() =>
				dispatch({
					type: 'SET_ALERT',
					payload: null,
				}),
			4000
		);
	};

	// Clear Users
	const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

	// Set Loading
	const setLoading = () => dispatch({ type: 'SET_LOADING' });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				alert: state.alert,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
				doAlert,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
