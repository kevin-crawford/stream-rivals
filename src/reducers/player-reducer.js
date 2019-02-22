import * as actions from '../actions/player-actions';

const initialState = {
	players: null,
	error: null
}

const playerReducer = (state = initialState, action) => {
	if(action.type === actions.ADD_PLAYER_SUCCESS) {
		return Object.assign({}, state, {
			players: [...state.players, {
				players: action.addedPlayer
			}]
		})
	} else if (action.type === actions.ADD_PLAYER_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}

export default playerReducer;