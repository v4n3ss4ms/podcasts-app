export const parseDateToLocaleString = (date: string) => {
  return new Date(date).toLocaleDateString()
}
