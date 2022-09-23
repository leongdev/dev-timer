export const getUserInformation = (state) => {
  return {
    userId: state.auth.hasAuth,
    userName: state.auth.userName,
    userEmail: state.auth.userEmail,
    userAuthProvider: state.auth.authProvider
  }
}
