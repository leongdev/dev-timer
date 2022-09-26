import { ActionTypes } from '../action/types/index'
const defaultState = {
  isPlaying: false,
  currentSound: {}
}

export default (state = { ...defaultState }, action) => {
  switch (action.type) {
    case ActionTypes.PLAY_SOUND:
      return {
        ...state,
        isPlaying: true,
        currentSound: action.payload.currentSound
      }
    case ActionTypes.PAUSE_SOUND:
      return {
        ...state,
        isPlaying: false
      }
    case ActionTypes.STOP_SOUND:
      return {
        ...state,
        isPlaying: false,
        currentSound: {}
      }
    default:
      return state
  }
}
