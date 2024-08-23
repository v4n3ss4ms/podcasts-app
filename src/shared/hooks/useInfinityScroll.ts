import { useEffect, useRef, useState } from 'react'

const PAGE_SIZE = 10
let timeOutId: NodeJS.Timeout

export const useInfinityScroll = <T>(list: T[]) => {
  const intersectContainer = useRef<HTMLDivElement>(null)
  const [piece, setPiece] = useState<T[]>([])

  useEffect(() => {
    if (piece.length === list.length) clearInterval(timeOutId)
  }, [piece])

  useEffect(() => {
    setPiece(list.slice(0, PAGE_SIZE))

    return () => {
      clearInterval(timeOutId)
    }
  }, [list])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timeOutId = setInterval(() => {
              setPiece((prev) => {
                return [...prev, ...list.slice(prev.length, prev.length + PAGE_SIZE)]
              })
            }, 50)

            return
          }
          clearInterval(timeOutId)
        }
      },
      {
        root: null,
        rootMargin: '100px 0px',
        threshold: 1.0,
      },
    )

    if (intersectContainer.current) {
      observer.observe(intersectContainer.current)
    }

    return () => {
      if (!intersectContainer.current) return
      observer.unobserve(intersectContainer.current)
    }
  }, [list])

  return { piece, intersectContainer }
}
