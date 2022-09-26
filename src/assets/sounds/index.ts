
export interface ISound {
  id: number,
  sound: any,
  icon: string,
  name: string,
}

const Sounds: Array<ISound> = [
  {
    id: 0,
    sound: require('./lofi_birds.mp3'),
    icon: '🪶',
    name: '🪶 Birds beat'
  },
  {
    id: 1,
    sound: require('./lofi_chill.mp3'),
    icon: '🧘‍',
    name: '🧘 Chill time'
  },
  {
    id: 2,
    sound: require('./lofi_chill_in_the_rain.mp3'),
    icon: '☔️',
    name: '☔️ Chill rain'
  },
  {
    id: 3,
    sound: require('./lofi_cosy_beat_with_piano.mp3'),
    icon: '🎹',
    name: '🎹 Cosy piano'
  },
  {
    id: 4,
    sound: require('./lofi_dream_lofi.mp3'),
    icon: '☁️',
    name: '☁️ Dream lofi'
  },
  {
    id: 5,
    sound: require('./lofi_get_work_done.mp3'),
    icon: '💪',
    name: '💪 Get work done'
  },
  {
    id: 6,
    sound: require('./lofi_jazz_mood.mp3'),
    icon: '🎷',
    name: '🎷 Jazz mood'
  },
  {
    id: 7,
    sound: require('./lofi_space_drifting.mp3'),
    icon: '🚀',
    name: '🚀 Space drifting'
  }
]

export default Sounds
