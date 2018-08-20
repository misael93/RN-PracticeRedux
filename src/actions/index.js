export const GET_PLAYERS = 'GET_PLAYERS';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const STORE_PLAYER = 'STORE_PLAYER';
export const SET_SESSION = 'SET_SESSION';
export const LOGOUT = 'LOGOUT';

import Players from '../players.json';

export function getPlayers() {
    return (dispatch, getState) => {
        let players;
        if (
            getState().dataReducer
            && getState().dataReducer.players.length > 0
        ) {
            players = getState().dataReducer.players;
        } else {
            players = Players.players;
        }
        dispatch({ type: GET_PLAYERS, players: players });
    };
}

export function updatePlayer(player) {
    return (dispatch, getState) => {
        // This commented code does not make the app re render the list of players
        // const players = getState().dataReducer.players;
        // players[player.id - 1] = player;
        // players[player.id - 1].dis = 'dude';
        let players = getState().dataReducer.players.filter(p => p.id !== player.id);
        players.push(player);
        dispatch({ type: UPDATE_PLAYER, players: players });
    };
}

export function storePlayer(id) {
    return (dispatch, getState) => {
        const players = getState().dataReducer.players;
        dispatch({ type:  STORE_PLAYER, player: players[id - 1] });
    }
}

export function setSession(email) {
    return (dispatch) => {
        dispatch({ type: SET_SESSION, session: email });
    }
}

export function logout() {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT', session: undefined });
    }
}