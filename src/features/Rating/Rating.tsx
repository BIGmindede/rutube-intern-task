import React, { MouseEvent, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Rating.module.scss'
import RatingButton, { RatingButtonThemes } from 'shared/UI/RatingButton/RatingButton'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from 'app/providers/router/config/routerConfig'
import { useAppDispatch } from 'shared/config/store/hooks'
import { checkRequiredAnswers } from 'shared/config/store/actionCreators/answersActions'
import { getAnswersByFormKey } from 'shared/lib/getAnswersByFormKey'
import { getAllAnswers } from 'shared/lib/getAllAnswers'

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
    redirectOnAnswer?: AppRoutes | false,
    formKey: string
}

const Rating: React.FC<RatingProps> = ({
    label, required, theme, buttons, questionID, boundsCaption, redirectOnAnswer, formKey
}) => {
    const [answer, setAnswer] = useState<number>(0)

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const handleAnswer = (e: MouseEvent, buttonIndex: number) => {
        e.preventDefault()
        
        setAnswer(buttonIndex + 1)

        const allAnswers = getAllAnswers()
        let answers = getAnswersByFormKey(formKey)
        answers = answers.filter(answer => answer.questionID !== questionID)
        answers.push({
            questionID,
            responseID: buttonIndex + 1
        })
        allAnswers[formKey] = answers
        localStorage.setItem(
            "answers",
            JSON.stringify(allAnswers)
        )
        dispatch(checkRequiredAnswers(formKey))
        if (redirectOnAnswer) {
            if (localStorage.getItem("stage") !== "extended") {
                localStorage.setItem("stage", "extended")
            }
            navigate(redirectOnAnswer)
        }
    }

    useEffect(() => {
        const answers = getAnswersByFormKey(formKey)
        const questionIndex = answers.findIndex(answer => answer?.questionID === questionID)
        if (questionIndex !== -1) {
            answers[questionIndex]?.responseID
            setAnswer(answers[questionIndex]?.responseID ?? 0)
        }
    }, [])

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
                        active={answer === index + 1}
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