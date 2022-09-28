import { IProjects, IProjectsData } from '../reducers/projects'

export const getProjectsList = (state) => state.projects.projects
export const getSelectedProject = (state) => state.projects.selectedProject

export const getFinishedIntervals = (state) => {
  const allProjects = state.projects.projects
  const selectedProject = state.projects.selectedProject

  // Check if selected project is all
  if (selectedProject.id === 0) {
    let totalSeconds = 0

    allProjects.map((item: IProjects) => {
      item.data.map((item2: IProjectsData) => {
        if (item2.completed) {
          totalSeconds += 1
        }
      })
    })

    return totalSeconds
  } else {
    let totalSeconds = 0

    selectedProject.data.map((item2: IProjectsData) => {
      if (item2.completed) {
        totalSeconds += 1
      }
    })

    return totalSeconds
  }
}

export const getNoFinishedIntervals = (state) => {
  const allProjects = state.projects.projects
  const selectedProject = state.projects.selectedProject

  // Check if selected project is all
  if (selectedProject.id === 0) {
    let totalSeconds = 0

    allProjects.map((item: IProjects) => {
      item.data.map((item2: IProjectsData) => {
        if (!item2.completed) {
          totalSeconds += 1
        }
      })
    })

    return totalSeconds
  } else {
    let totalSeconds = 0

    selectedProject.data.map((item2: IProjectsData) => {
      if (!item2.completed) {
        totalSeconds += 1
      }
    })

    return totalSeconds
  }
}

export const getTotalTime = (state) => {
  const allProjects = state.projects.projects
  const selectedProject = state.projects.selectedProject

  // Check if selected project is all
  if (selectedProject.id === 0) {
    let totalSeconds = 0

    allProjects.map((item: IProjects) => {
      item.data.map((item2: IProjectsData) => {
        totalSeconds += item2.time
      })
    })

    return totalSeconds
  } else {
    let totalSeconds = 0

    selectedProject.data.map((item2: IProjectsData) => {
      totalSeconds += item2.time
    })

    return totalSeconds
  }
}

export const getTotalMoney = (state) => {
  const allProjects = state.projects.projects
  const selectedProject = state.projects.selectedProject
  const moneyPerHour = state.user.moneyPreferences.pricePerHour

  // Check if selected project is all
  if (selectedProject.id === 0) {
    let totalSeconds = 0

    allProjects.map((item: IProjects) => {
      item.data.map((item2: IProjectsData) => {
        totalSeconds += item2.time
      })
    })

    return (totalSeconds / 3600) * moneyPerHour
  } else {
    let totalSeconds = 0

    selectedProject.data.map((item2: IProjectsData) => {
      totalSeconds += item2.time
    })

    return (totalSeconds / 3600) * moneyPerHour
  }
}
