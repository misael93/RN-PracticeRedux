import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { GET_PLAYERS } from '../actions';
import { UPDATE_PLAYER } from '../actions';
import { STORE_PLAYER } from '../actions';
import { SET_SESSION } from '../actions';
import { LOGOUT } from '../actions';

let dataState = { players: [], loading: true, session: undefined };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            if (action.payload) {
                return { ...state, ...action.payload.dataReducer };
            } else {
                return state;
            }
        case GET_PLAYERS:
            return { ...state, ...{ players: action.players, loading: false } };
        case UPDATE_PLAYER:
            return { ...state, ...{ players: action.players } };
        case STORE_PLAYER:
            return { ...state, ...{ player:action.player } };
        case SET_SESSION:
            return { ...state, ...{ session: action.session } };
        case LOGOUT:
            return { ...state, ...{ session: undefined } };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer,
    form: formReducer
});

export default rootReducer;
