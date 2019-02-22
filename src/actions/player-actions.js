import {API_USER_URL, TWITCH_CLIENT_ID} from '../config';
import {normalizeResponseErrors} from './utils';


export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const fetchPlayersSuccess = fetchedPlayers => ({
	type: FETCH_PLAYERS_SUCCESS,
	fetchedPlayers
});

export const FETCH_PLAYERS_ERROR = 'FETCH_PLAYERS_ERROR';
export const fetchPlayersError = error => ({
	type: FETCH_PLAYERS_ERROR,
	error
});

export const ADD_PLAYER_SUCCESS = 'ADD_PLAYER_SUCCESS';
export const addPlayerSuccess = addedPlayer => ({
	type: ADD_PLAYER_SUCCESS,
	addedPlayer
});

export const ADD_PLAYER_ERROR = 'ADD_PLAYER_ERROR';
export const addPlayerError = error => ({
	type: ADD_PLAYER_ERROR,
	error
});

export const addPlayer = player = (dispatch, getState) => {
	console.log('adding player', player);
	
	const playerName = player
	// fetch player info from helix API to obtain player stream ID for video embed using login name.
	return fetch(`${API_USER_URL}?/login=${playerName}`, {
		method: 'GET',
		headers: {
			'Client-Id': TWITCH_CLIENT_ID, 
		}
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(player => {
		console.log('player', player);
		dispatch(addPlayerSuccess(player));
	})
	.catch( err => {
		dispatch(addPlayerError(err));
	});
};