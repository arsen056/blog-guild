import React, {FC, HTMLAttributes} from 'react';
import s from './Button.module.css'

type Props = {
  disabled?: boolean
} & HTMLAttributes<HTMLButtonElement>

export const Button:FC<Props> = ({disabled, className, ...rest}) => {
  return <button disabled={disabled} className={`${s.button} ${className}`} {...rest} />
};
