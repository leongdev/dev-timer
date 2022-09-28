import * as S from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useResponsive from '../../hooks/useResponsive'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import BaseModal from '../BaseModal'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectsList, getSelectedProject } from '../../store/selectors/projects'
import { IProjects } from '../../store/reducers/projects'
import ProjectItem from '../ProjectItem'
import Layout from '../../../constants/Layout'
import Button from '../Button'
import { setSelectedProject } from '../../store/action/projects'

const DropDown = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const selectedProject = useSelector(getSelectedProject)
  const projectList = useSelector(getProjectsList)
  const dispatch = useDispatch()

  const { width } = Layout.window
  const { colors } = useTheme()
  const iconSize = useResponsive(0.5)

  const renderProjectList = (item: IProjects, index: number) => {
    return (
      <>
        <Button
          onPress={() => {
            dispatch(setSelectedProject(item))
          }}
          title={item.name}
          inverted={!(item.id === selectedProject.id)}
          isFullWidth
        />
        <S.LineSpace/>
      </>
    )
  }

  return (
    <S.Container onPress={() => setModalVisible(true)}>
      <S.DropTitle>{selectedProject.name}</S.DropTitle>
      <S.RightIndicator >
        <MaterialCommunityIcons color={colors.background} name={'chevron-down'} size={iconSize}/>
      </S.RightIndicator>
      <BaseModal
        onPressBackdrop={() => setModalVisible(false) }
        isVisible={isModalVisible}
      >
        <S.ProjectsListModalContainer>
          <S.ModalTitle> Selecione o Projeto </S.ModalTitle>
          <S.Line/>
          {projectList.length > 0
            ? (<S.ProjectsList
              contentContainerStyle={{ paddingBottom: width * 0.3 }}
              keyExtractor={({ id }: IProjects) => `${id}`}
              data={projectList}
              renderItem={({ item, index }: {item: IProjects, index: number}) => renderProjectList(item, index)}
            />)
            : (
            <Text> Ta sem nada</Text>
              )
          }
        </S.ProjectsListModalContainer>

      </BaseModal>
    </S.Container>
  )
}

export default DropDown
