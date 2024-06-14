import React, { ButtonHTMLAttributes } from 'react'
import cls from './RatingButton.module.scss'
import { classNames } from 'shared/lib/classNames'

export enum RatingButtonThemes {
    TEXT = 'text',
    NUMBER = 'number'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string | number
    theme: RatingButtonThemes
    active: boolean
}

const RatingButton: React.FC<ButtonProps> = ({ label, theme, active, onClick }) => {
  return (
    <button 
        onClick={onClick} 
        className={classNames(cls.button, {[cls.active]: active}, [cls[theme]])}
    >
        {label}
    </button>
  )
}

export default RatingButton