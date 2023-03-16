type Item = {
  id: string
}

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((items: TItem) => items.id === id)
}
