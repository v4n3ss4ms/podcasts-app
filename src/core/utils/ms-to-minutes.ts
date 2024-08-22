export const millisecondsToHoursMinutesSeconds = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / 3600000)
  const minutes = Math.floor((milliseconds % 3600000) / 60000)
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0)
  return (
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (Number(seconds) < 10 ? '0' : '') +
    seconds
  )
}
