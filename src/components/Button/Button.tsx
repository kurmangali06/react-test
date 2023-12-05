import React from 'react'
import { ButtonProps } from './Button.props'
import cn from 'classnames'
import './Button.css'

const  Button = ({children,appearance, className, ...props }: ButtonProps): JSX.Element =>  {
  return (
    <button className={cn('btn', className, {
        'primary': appearance === 'primary',
        'ghost': appearance === 'ghost',
        'none': appearance === 'none',
      })} {...props}>{children}</button>
  )
}

export default Button