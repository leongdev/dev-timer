export const getUserInformation = (state) => {
  return {
    userId: state.auth.hasAuth,
    userName: state.auth.userName,
    userEmail: state.auth.userEmail,
    userAuthProvider: state.auth.authProvider
  }
}

export const getUserMoneyPreferences = (state) => state.user.moneyPreferences

export const getTimerPreferences = (state) => state.user.timerPreferences
