import React, { ComponentProps, FC, KeyboardEvent } from 'react';
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
        onKeyDown={onEnterHandler}
        {...rest} />
      <div className={s.errorMessage}>{error ? error : ' '}</div>
    </div>
  )
};
