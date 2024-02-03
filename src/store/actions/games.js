import {SET_GAME_DATA} from '@store/types';
import store from '@store/store';

export const setGameData = gameData => {
    return store.dispatch({
      type: SET_GAME_DATA,
      payload: gameData,
    });

};
