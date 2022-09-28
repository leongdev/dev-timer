import { ActionTypes } from '../action/types/index'

export interface IMoneyPreferences {
  pricePerHour: number,
  earnPerMoth: number,
  hoursPerDay: number,
  weekWorkDays: number
}

export const defaultUserState = {
  moneyPreferences: {
    pricePerHour: 0,
    earnPerMoth: 0,
    hoursPerDay: 0,
    weekWorkDays: 0
  },
  timerPreferences: 60
}

export default (state = { ...defaultUserState }, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_MONEY_PREFERENCES:
      return {
        ...state,
        moneyPreferences: action.payload
      }

    case ActionTypes.SET_TIME_PREFERENCES:
      return {
        ...state,
        timerPreferences: action.payload
      }
    default:
      return state
  }
}
