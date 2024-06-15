import React from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Caption.module.scss'

export enum CaptionThemes {
    BASIC = 'basic',
    PALE = 'pale'
}

interface CaptionProps {
    text: string,
    theme: CaptionThemes
}

const Caption: React.FC<CaptionProps> = ({text, theme}) => {
  return (
    <div className={classNames(cls.caption, {}, [cls[theme]])}>{text}</div>
  )
}

export default Caption