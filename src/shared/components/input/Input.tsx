import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import styles from './input.module.css'
import { UseFormRegister } from 'react-hook-form'
import { FormSearchInput } from '../../../pages/podcasts/Podcasts.tsx'

export interface InputProps {
  register?: UseFormRegister<FormSearchInput>
  name?: string
  className?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  type = 'text',
  placeholder,
  name,
  onChange,
  register,
}: InputProps): ReactNode {
  const [value, setValue] = useState<ChangeEvent<HTMLInputElement>>()

  useEffect(() => {
    const timeOutId = setTimeout(
      () => value && onChange && onChange(value),
      250,
    )
    return () => clearTimeout(timeOutId)
  }, [value])

  return (
    <input
      className={styles.input}
      type={type}
      {...(placeholder && { placeholder })}
      {...(name && register && { ...register('terms') })}
      onChange={(ev) => setValue(ev)}
    />
  )
}
