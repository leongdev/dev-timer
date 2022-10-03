
import { ActionTypes } from './types'

const setUserMoneyPreferences = (
  earnPerMoth: string,
  hoursPerDay: string,
  weekWorkDays: string
) => (dispatch) => {
  let pricePerHour = 0
  if (hoursPerDay !== '0' && weekWorkDays !== '0' && earnPerMoth !== '0') {
    pricePerHour = earnPerMoth / (hoursPerDay * weekWorkDays * 4)
  }

  dispatch({
    type: ActionTypes.SET_USER_MONEY_PREFERENCES,
    payload: {
      pricePerHour,
      earnPerMoth,
      hoursPerDay,
      weekWorkDays
    }

  })
}

const setTimerPreferences = (
  time: number
) => (dispatch) => {
  return dispatch({
    type: ActionTypes.SET_TIME_PREFERENCES,
    payload: time
  })
}

export {
  setUserMoneyPreferences,
  setTimerPreferences
}
