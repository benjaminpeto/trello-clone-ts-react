import { FC, createContext, useContext } from 'react'

type Task = {
  id: string
  text: string
}

type List = {
  id: string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{id: 'c0', text: "Generate app structure"}]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{id: 'c1', text: "Learn TS and Next"}]
    },
    {
      id: "2",
      text: "To Do",
      tasks: [{id: 'c2', text: "Go surfing"}]
    },
  ]
}

type AppStateContextProps = {
  lists: List[]
  getTasksByListId(id: string): Task[]
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider: FC = ({children}) => {
  const {lists} = appData
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider
      value={{lists, getTasksByListId}}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}