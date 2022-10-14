
export interface ISound {
  id: number,
  sound: any,
  icon: string,
  name: string,
}

const Sounds: Array<ISound> = [
  {
    id: 0,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_birds.mp3',
    icon: '🐤',
    name: '🐤 Birds beat'
  },
  {
    id: 1,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_chill.mp3',
    icon: '🧘‍',
    name: '🧘 Chill time'
  },
  {
    id: 2,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_chill_in_the_rain.mp3',
    icon: '☔️',
    name: '☔️ Chill rain'
  },
  {
    id: 3,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_cosy_beat_with_piano.mp3',
    icon: '🎹',
    name: '🎹 Cosy piano'
  },
  {
    id: 4,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_dream_lofi.mp3',
    icon: '☁️',
    name: '☁️ Dream lofi'
  },
  {
    id: 5,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_get_work_done.mp3',
    icon: '💪',
    name: '💪 Get work done'
  },
  {
    id: 6,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_jazz_mood.mp3',
    icon: '🎷',
    name: '🎷 Jazz mood'
  },
  {
    id: 7,
    sound: 'https://daily-noises.s3.amazonaws.com/sounds/lofi_space_drifting.mp3',
    icon: '🚀',
    name: '🚀 Space drifting'
  }
]

export default Sounds
