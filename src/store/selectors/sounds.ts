export const getCurrentSound = (state: any) => {
  return {
    isPlaying: state.sounds.isPlaying,
    currentSound: state.sounds.currentSound
  }
}
