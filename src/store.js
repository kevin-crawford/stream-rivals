import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import playerReducer from './reducers/player-reducer';


const store = createStore(
		combineReducers({
				player: playerReducer,
}),
	applyMiddleware(thunk)
);

export default store;