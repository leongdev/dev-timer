import * as S from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useResponsive from '../../hooks/useResponsive'
import { useTheme } from 'styled-components/native'
import { IProjects } from '../../store/reducers/projects'
import { useEffect, useState } from 'react'
import BaseModal from '../BaseModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject, editProjectName } from '../../store/action/projects'
import Input from '../Input'
import Button from '../Button'
import { getProjectsList, getSelectedProject } from '../../store/selectors/projects'

interface IProjectItem {
  project: IProjects,
  canDelete?: boolean,
  canEdit?: boolean,
  onPressEditButton?: ()=> {}
}

const ProjectItem = ({ project, canEdit = true, canDelete = true, onPressEditButton }: IProjectItem) => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
  const [isEditModalVisible, setEditModalVisible] = useState(false)
  const [newName, setNewName] = useState('')
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const iconColor = useResponsive(0.5)

  const onPressDelete = () => {
    dispatch(deleteProject(project))
  }

  const onPressEdit = () => {
    setEditModalVisible(false)
    dispatch(editProjectName(project, newName))
    onPressEditButton && onPressEditButton()
  }

  return (
    <S.Container>
      <S.EditButton
        onPress={() => canEdit && setEditModalVisible(true)}
      >
        {canEdit && <MaterialCommunityIcons name={'pencil'} />}
        <S.Title>{project.name}</S.Title>
      </S.EditButton>
      <S.TrashButton
        onPress={() => {
          canDelete && setDeleteModalVisible(true)
        }}
      >
        {canDelete && (
          <MaterialCommunityIcons
            name={'trash-can'}
            size={iconColor}
            color={colors.text}
          />
        )}
      </S.TrashButton>
      <BaseModal
        onPressBackdrop={() => setDeleteModalVisible(false)}
        isVisible={isDeleteModalVisible}
        content={{
          title: 'Deletar Projeto',
          description: 'Tem certeza que você deseja deletar esse projeto?',
          leftButtonTitle: 'Cancelar',
          rightButtonTitle: 'Deletar',
          onPressLeft: () => {
            onPressDelete()
          },
          onPressRight: () => {
            setDeleteModalVisible(false)
          }
        }}
      />
      <BaseModal
        onPressBackdrop={() => setEditModalVisible(false)}
        isVisible={isEditModalVisible}
      >
        <S.EditModalContainer>
          <Input placeholder={project.name} onChangedText={(text) => setNewName(text)}/>
          {newName.length > 0 && (
            <>
              <Button onPress={() => onPressEdit()} title={'Editar'} />
              <S.LineSpace/>
            </>
          )}

          <Button onPress={() => setEditModalVisible(false)} inverted title={'Cancelar'}/>
          <S.LineSpace/>
        </S.EditModalContainer>
      </BaseModal>
    </S.Container>
  )
}

export default ProjectItem
