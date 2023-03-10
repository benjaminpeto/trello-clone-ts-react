import { AppContainer } from "./styles"
import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"

export const App = () => {
  return (
  <AppContainer>
    <Column text="Todos for today" />
    <AddNewItem
      toggleButtonText="+ Add another list"
      onAdd={(e) => console.log(e)}
    />
  </AppContainer>
  )
}