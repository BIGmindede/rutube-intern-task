import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Rating.module.scss'
import RatingButton, { RatingButtonThemes } from 'shared/UI/RatingButton/RatingButton'

export enum RatingThemes {
    GRID = 'grid',
    ROW = 'row',
    COLUMN = 'column'
}

interface RatingProps {
    label?: string,
    required?: boolean,
    theme: RatingThemes,
    buttons: Array<string> | Array<number>,
    questionID: number
    boundsCaption?: {
        left: string,
        right: string
    }
}

const Rating: React.FC<RatingProps> = ({
    label, required, theme, buttons, questionID, boundsCaption
}) => {
    const [answer, setAnswer] = useState<number | null>(null)

    const handleAnswer = (buttonIndex: number) => {
        setAnswer(buttonIndex + 1)
    }

    return (
        <div className={classNames(cls.rating, {}, [cls[theme]])}>
            {label &&
                <div className={cls.label}>{`${questionID}. `}{label}{required && " *"}</div>
            }
            <div className={cls.buttons}>
                {buttons.map((button, index) => 
                    <RatingButton
                        key={index}
                        label={button}
                        theme={theme === RatingThemes.COLUMN
                            ? RatingButtonThemes.TEXT
                            : RatingButtonThemes.NUMBER
                        }
                        active={index + 1 === answer}
                        onClick={() => handleAnswer(index)}
                    />
                )}
            </div>
            {boundsCaption &&
                <div className={cls.boundscaption}>
                    <span>{boundsCaption.left}</span>
                    <span>{boundsCaption.right}</span>
                </div>
            }
        </div>
  )
}

export default Rating