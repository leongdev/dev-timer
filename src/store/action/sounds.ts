import { handleGithubSignIn, handleGoogleSignIn } from '../../services/auth'
import { ActionTypes } from './types/index'
import { ISound } from '../../assets/sounds'

const playSound = (sound: ISound) => (dispatch: any) => {
  dispatch({
    type: ActionTypes.PLAY_SOUND,
    payload: {
      currentSound: sound
    }
  })
}

const pauseSound = (dispatch: any) => {
  dispatch({
    type: ActionTypes.PAUSE_SOUND,
    payload: {}
  })
}

const stopSound = (dispatch: any) => {
  dispatch({
    type: ActionTypes.STOP_SOUND,
    payload: {}
  })
}

export {
  playSound,
  pauseSound,
  stopSound
}
