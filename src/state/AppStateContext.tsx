import { FC, createContext, useContext, Dispatch } from 'react'
import {
  AppState,
  List,
  Task,
  appStateReducer
} from './appStateReducer'
import { Action } from './actions'
import { useImmerReducer } from 'use-immer'
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
  dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider: FC = ({children}) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData)
  const {lists} = state

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider
      value={{lists, getTasksByListId, dispatch}}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}