import React, { ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames'

export enum ButtonThemes {
    FIXED = 'fixed',
    STRETCHING = 'stretching'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    theme: ButtonThemes
}

const Button: React.FC<ButtonProps> = ({ label, theme, onClick }) => {
  return (
    <button onClick={onClick} className={classNames(cls.button, {}, [cls[theme]])}>
        {label}
    </button>
  )
}

export default Button