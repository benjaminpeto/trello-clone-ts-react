import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = {
  text: string
}

export const Column = ({text}: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text='lol' />
      <Card text='dsdsa' />
      <Card text='dsar3q' />
      <AddNewItem toggleButtonText='+ Add another Card' onAdd={() => console.log('new item added')} dark/>
    </ColumnContainer>
  )
}