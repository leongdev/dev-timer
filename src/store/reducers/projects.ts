import { ActionTypes } from '../action/types/index'

export interface IProjectsData {
  id:number,
  date: Date,
  completed: boolean,
  time: number
}

export interface IProjects {
  id: number,
  name: string,
  data: Array<IProjectsData>
}

export const defaultProjectState = {
  projects: [{
    id: 0,
    name: 'Todos',
    data: [

    ]
  }],
  selectedProject: {
    id: 0,
    name: 'Todos',
    data: [

    ]
  }
}

export default (state = { ...defaultProjectState }, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PROJECT:
      return {
        ...state,
        projects: action.payload.projects
      }
    case ActionTypes.UPDATE_PROJECT:
      return {
        ...state,
        projects: action.payload.projects
      }
    case ActionTypes.DELETE_PROJECT:
      return {
        ...state,
        projects: action.payload.projects
      }
    case ActionTypes.SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: action.payload.selectedProject
      }
    default:
      return state
  }
}
