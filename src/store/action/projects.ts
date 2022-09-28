import { ActionTypes } from './types/index'
import { IProjects, IProjectsData } from '../reducers/projects'

const createProject = (project: IProjects) => (dispatch: any, getState: any) => {
  const { projects } = getState()

  const newProject = projects.projects
  newProject.push(project)

  dispatch({
    type: ActionTypes.CREATE_PROJECT,
    payload: {
      projects: newProject
    }
  })
}

const deleteProject = (project: IProjects) => (dispatch: any, getState: any) => {
  const { projects } = getState()

  const newProject = projects.projects.filter((item) => {
    return item.id !== project.id
  })

  if (project.id === projects.selectedProject.id) {
    dispatch({
      type: ActionTypes.SET_SELECTED_PROJECT,
      payload: {
        selectedProject: projects.projects[0]
      }
    })
  }

  dispatch({
    type: ActionTypes.DELETE_PROJECT,
    payload: {
      projects: newProject
    }
  })
}

const editProjectName = (project: IProjects, name: string) => (dispatch: any, getState: any) => {
  const { projects } = getState()

  const projectIndex = projects.projects.indexOf(project)
  const editedProjects = projects.projects

  editedProjects[projectIndex] = {
    ...editedProjects[projectIndex],
    name
  }

  dispatch({
    type: ActionTypes.UPDATE_PROJECT,
    payload: {
      projects: editedProjects
    }
  })
}

const saveProjectTime = (count: string, completed: boolean) => (dispatch: any, getState: any) => {
  const { projects, user } = getState()

  const project = projects.selectedProject
  const timerPreferences = user.timerPreferences

  let projectIndex = 0

  projects.projects.map((item, index) => {
    if (item.id === project.id) {
      projectIndex = index
    }
  })

  const editedProjects = projects.projects
  const timeData = editedProjects[projectIndex].data
  const newTimeData: IProjectsData = {
    id: editedProjects[projectIndex].data.length + 1,
    date: new Date(),
    completed,
    time: (60 * timerPreferences) - count
  }

  timeData.push(newTimeData)

  editedProjects[projectIndex] = {
    ...editedProjects[projectIndex],
    data: timeData
  }

  dispatch({
    type: ActionTypes.UPDATE_PROJECT,
    payload: {
      projects: editedProjects
    }
  })
}

const setSelectedProject = (project: IProjects) => (dispatch: any, getState: any) => {
  dispatch({
    type: ActionTypes.SET_SELECTED_PROJECT,
    payload: {
      selectedProject: project
    }
  })
}

export {
  createProject,
  setSelectedProject,
  deleteProject,
  editProjectName,
  saveProjectTime
}
