
import { useState } from 'react'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

interface IInput {
  placeholder: string,
  onChangedText: (text: string)=> void,
  errorMessage?: string,
  isPassword?: boolean,
  isFullWidth?: boolean,
  customValue?: string,
  hasCustomValue?:boolean,
  isNumeric?: boolean,
}

const Input = ({
  placeholder,
  onChangedText,
  errorMessage,
  isPassword,
  isFullWidth,
  customValue,
  hasCustomValue = false,
  isNumeric
}: IInput) => {
  const [value, setValue] = useState('')
  const { colors } = useTheme()
  return (
    <S.InputContainer
      isFullWidth={isFullWidth}
    >
      <S.InputField
        returnKeyType="next"
        keyboardType={isNumeric ? 'number-pad' : 'default'}
        secureTextEntry={isPassword || false}
        placeholder={placeholder}
        numberOfLines={1}
        placeholderTextColor={colors.text}
        value={hasCustomValue ? customValue : value}
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
