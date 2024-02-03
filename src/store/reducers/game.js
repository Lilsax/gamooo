const initialState = {};
  import { SET_GAME_DATA } from '@store/types'

  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_GAME_DATA:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default gameReducer;