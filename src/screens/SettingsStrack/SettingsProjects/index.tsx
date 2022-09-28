
import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import * as S from './styles'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { createProject } from '../../../store/action/projects'
import { getProjectsList } from '../../../store/selectors/projects'

import { IProjects } from '../../../store/reducers/projects'
import Layout from '../../../../constants/Layout'
import ProjectItem from '../../../components/ProjectItem'

function SettingsProjects ({ navigation }: RootTabScreenProps<any>) {
  const [projectName, setProjectName] = useState('')
  const projectList = useSelector(getProjectsList)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const [projects, setProjectList] = useState(projectList)
  const [refresh, setRefresh] = useState('')

  const { width } = Layout.window
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('LALAALAL')
    setProjectList(projectList)
  }, [projectList])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const createNewProject = () => {
    const lastId = projectList[projectList.length - 1]

    // @ts-ignore
    dispatch(
      // @ts-ignore
      createProject({
        id: lastId.id + 1,
        name: projectName,
        data: []
      })
    )

    setProjectName('')
  }

  const renderProjectList = (item: IProjects, index) => {
    return (
      <ProjectItem
        onPressEditButton={() => {
          setRefresh('refresh')
          setTimeout(() => {
            setRefresh('')
          }, 10)
        }}
        canDelete={index !== 0}
        canEdit={index !== 0}
        project={item}
      />
    )
  }

  return (
    <SafeContainer>
      <Header
        hasBack
        onPressBack={() => navigation.goBack()}
        title='Projetos'
      />

        <S.Container>

          <S.ProjectsContainer>
            {
              refresh.length === 0 && (
                <S.ProjectList
                  extraData={projects}
                  contentContainerStyle={{ paddingBottom: width * 0.6 }}
                  keyExtractor={({ id }: IProjects) => id}
                  data={projects}
                  renderItem={({ item, index }: any) => renderProjectList(item, index)}
                />
              )
            }

          </S.ProjectsContainer>

          <S.BottomContainer isKeyboardVisible={isKeyboardVisible}>
            <S.LineSpace/>
            <Input
              hasCustomValue
              customValue={projectName}
              isFullWidth
              placeholder={'Nome do projeto'}
              onChangedText={(text) => { setProjectName(text) }}
            />
            <Button
              onPress={() => projectName.length > 0 && createNewProject()}
              isFullWidth
              title={'Adicionar'}
            />
          </S.BottomContainer>
        </S.Container>

    </SafeContainer>
  )
}

export default SettingsProjects
