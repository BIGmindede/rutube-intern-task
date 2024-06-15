import React from 'react'
import cls from './Heading.module.scss'

interface HeadingProps {
    text: string
}

const Heading: React.FC<HeadingProps> = ({text}) => {
  return (
    <h1 className={cls.heading}>{text}</h1>
  )
}

export default Heading