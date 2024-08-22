import { useEffect, useState } from 'react'

export const useCounter = (count: number) => {
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setNewCount((oldCount) => {
        if (oldCount === count) {
          return count
        }

        if (count > oldCount) {
          return ++oldCount
        } else {
          return --oldCount
        }
      })
    }, 5)

    return () => clearTimeout(timeOutId)
  }, [count, newCount])

  return newCount
}
