import React from 'react'
import { Image } from 'react-native'
import { getImage } from './images'

interface IImages {
  name: string,
  width: number,
  height: number
}

const Images: React.FC<IImages> = ({ name, width, height }) => {
  return (
    <Image resizeMode='contain' style={{ width, height }} source={getImage(name)} />
  )
}

export default Images
