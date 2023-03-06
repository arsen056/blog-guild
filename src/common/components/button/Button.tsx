import React, {FC, HTMLAttributes} from 'react';
import s from './Button.module.css'

type Props = {

} & HTMLAttributes<HTMLButtonElement>

export const Button:FC<Props> = ({className, ...rest}) => {
  return <button className={`${s.button} ${className}`} {...rest} />
};
