import React, { ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames'
import { useAppSelector } from 'shared/config/store/hooks'
import { selectFormButtonState } from 'shared/config/store/slices/formButtonSlice'

export enum ButtonThemes {
    FIXED = 'fixed',
    STRETCHING = 'stretching'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    theme: ButtonThemes
}

const Button: React.FC<ButtonProps> = ({ label, theme, onClick }) => {

    const isDisabled = useAppSelector(selectFormButtonState)

    return (
        <button disabled={isDisabled} onClick={onClick} className={classNames(cls.button, {}, [cls[theme]])}>
            {label}
        </button>
    )
}

export default Button