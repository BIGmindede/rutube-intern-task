import React, { MouseEvent, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Rating.module.scss'
import RatingButton, { RatingButtonThemes } from 'shared/UI/RatingButton/RatingButton'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from 'app/providers/router/config/routerConfig'

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
    },
    redirectOnAnswer?: AppRoutes | false
}

const Rating: React.FC<RatingProps> = ({
    label, required, theme, buttons, questionID, boundsCaption, redirectOnAnswer
}) => {
    const [answer, setAnswer] = useState<number | null>(null)

    const navigate = useNavigate()

    const handleAnswer = (e: MouseEvent, buttonIndex: number) => {
        e.preventDefault()
        setAnswer(buttonIndex + 1)
        if (redirectOnAnswer) {
            navigate(redirectOnAnswer)
        }
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
                        onClick={(e) => handleAnswer(e, index)}
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