import React from 'react'
import cls from './Image.module.scss'

interface ImageProps {
    pathToFile: string,
    maxWidth: number,
    maxHeight: number
}

const Image: React.FC<ImageProps> = ({pathToFile, maxWidth, maxHeight}) => {
  return (
    <img 
        className={cls.image}
        src={pathToFile} alt="No picture :("
        style={{maxWidth: `${maxWidth}px`, maxHeight: `${maxHeight}px`}}
    />
  )
}

export default Image