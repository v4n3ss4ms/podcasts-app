import { useEffect, useState } from 'react'

let acc = 0

export const useHideByTime = () => {
  const [hide, setIsHide] = useState<boolean>(true)

  useEffect(() => {
    if (acc === 400 || acc < 0) acc = 0
    acc += 40
    const timeOutId = setTimeout(() => setIsHide(false), acc)
    return () => {
      clearTimeout(timeOutId)
      setIsHide(true)
      acc -= 40
    }
  }, [])

  return hide
}
