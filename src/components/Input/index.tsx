
import { useState } from 'react'
import * as S from './styles'

interface IInput {
  placeholder: string,
  onChangedText: (text: string)=> void,
  errorMessage?: string,
  isPassword?: boolean,
  isFullWidth?: boolean
}

const Input = ({
  placeholder,
  onChangedText,
  errorMessage,
  isPassword,
  isFullWidth
}: IInput) => {
  const [value, setValue] = useState('')
  return (
    <S.InputContainer
      isFullWidth={isFullWidth}
    >
      <S.InputField
        secureTextEntry={isPassword || false}
        placeholder={placeholder}
        numberOfLines={1}
        value={value}
        onChangeText={(text) => {
          setValue(text)
          onChangedText(text)
        }}
      />
      {errorMessage && (<S.ErrorTitle>{errorMessage}</S.ErrorTitle>)}
    </S.InputContainer>
  )
}

export default Input
