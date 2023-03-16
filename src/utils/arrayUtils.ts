type Item = {
  id: string
}

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((items: TItem) => items.id === id)
}

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)]
  // return array.filter((_, i) => i !== index)
}

export function insertItemAtIndex<TItem>(array: TItem[], item: TItem, index: number) {
  return [...array.slice(0, index), item, ...array.slice(index)]; 
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from]
  return insertItemAtIndex(removeItemAtIndex(array,from), item, to)
}