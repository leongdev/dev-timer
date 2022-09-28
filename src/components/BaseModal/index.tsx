import Modal from 'react-native-modal'
import { ReactNode } from 'react'
import * as S from './styles'
import Button from '../Button'

interface IModalContenr {
  title: string;
  description: string;
  leftButtonTitle: string;
  rightButtonTitle: string;
  onPressRight: ()=> void;
  onPressLeft: ()=> void;
}

interface IBaseModal {
  isVisible: boolean;
  children?: ReactNode;
  onPressBackdrop?: ()=> void;
  content?: IModalContenr
}

const BaseModal = ({
  isVisible,
  children,
  onPressBackdrop,
  content
}: IBaseModal) => {
  return (
    <Modal
      onBackdropPress={() => onPressBackdrop && onPressBackdrop()}
      isVisible={isVisible}
    >
      {children}
      {content && (
        <S.Container>
          <S.ModalTitle>
            {content.title}
          </S.ModalTitle>
          <S.Line/>
          <S.ModalDescription>
            {content.description}
          </S.ModalDescription>
          <S.LineSpace/>
          <S.ModalBottom>
            <Button
              onPress={() => content?.onPressLeft()}
              title={content.rightButtonTitle}
            />
            <S.LineSpace/>
            <Button
              onPress={() => content?.onPressRight()}
              inverted
              title={content.leftButtonTitle}
            />
          </S.ModalBottom>
          <S.LineSpace/>
        </S.Container>
      )}
    </Modal>
  )
}

export default BaseModal
