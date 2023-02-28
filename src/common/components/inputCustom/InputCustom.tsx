import React, { ChangeEvent, ComponentProps, FC, useState, KeyboardEvent } from 'react';
import s from'./InputCustom.module.css'

type Props = {
  onEnter?: () => void
  error?: string
  fullWidth?: boolean
} & ComponentProps<'input'>

export const InputCustom:FC<Props> = (
  {
    className,
    onEnter, error,
    fullWidth,
    ...rest
  }) => {

  const [value, setValue] = useState<string>('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setValue(value)
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && onEnter && onEnter()
  }

  const inputClassName = error ? s.errorInput : '';
  const fullWidthClass = fullWidth ? s.fullwidth : ''

  return (
    <div>
      <input
        type="text"
        className={`${s.input} ${className} ${inputClassName} ${fullWidthClass}`}
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onEnterHandler}
        {...rest} />
      <div className={s.errorMessage}>{error ? error : ' '}</div>
    </div>
  )
};
