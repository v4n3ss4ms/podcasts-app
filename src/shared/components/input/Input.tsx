import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import styles from './input.module.css'

export interface InputProps {
  className?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ type = 'text', placeholder, onChange }: InputProps): ReactNode {
  const [value, setValue] = useState<ChangeEvent<HTMLInputElement>>()

  useEffect(() => {
    const timeOutId = setTimeout(() => value && onChange && onChange(value), 250)
    return () => clearTimeout(timeOutId)
  }, [value])

  return (
    <input className={styles.input} type={type} {...(placeholder && { placeholder })} onChange={(ev) => setValue(ev)} />
  )
}
