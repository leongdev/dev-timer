
import { useState } from 'react'
import * as S from './styles'

interface IInput {
  placeholder: string,
  changedText: ()=> string,
  errorMessage?: string,
  isPassword?: boolean,
}

const Input = ({ placeholder, changedText, errorMessage, isPassword }: IInput) => {
  const [value, setValue] = useState('')
  return (
    <S.InputContainer>
      <S.InputField
        secureTextEntry={isPassword || false}
        placeholder={placeholder}
        numberOfLines={1}
        value={value}
        onChangeText={(text) => {
          setValue(text)
          changedText(text)
        }}
      />
      {errorMessage && (<S.ErrorTitle>{errorMessage}</S.ErrorTitle>)}
    </S.InputContainer>
  )
}

export default Input
