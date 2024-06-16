import { AppRoutes } from 'app/providers/router/config/routerConfig'
import Rating, { RatingThemes } from 'features/Rating/Rating'
import React, { useEffect } from 'react'
import Caption, { CaptionThemes } from 'shared/UI/Caption/Caption'
import cls from './Form.module.scss'
import Heading from 'shared/UI/Heading/Heading'
import Button, { ButtonThemes } from 'shared/UI/Button/Button'
import { classNames } from 'shared/lib/classNames'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/config/store/hooks'
import { checkRequiredAnswers } from 'shared/config/store/actionCreators/answersActions'
import { retrieveAnswers } from 'shared/lib/retrieveAnswers'

interface FormProps {
    heading?: string,
    caption?: {
        text: string,
        theme: CaptionThemes
    }
    questions?: Array<{
        label?: string,
        required?: boolean,
        theme: RatingThemes,
        buttons: Array<string> | Array<number>
        boundsCaption?: {
            left: string,
            right: string
        }
    }>
    redirectOnComplete: AppRoutes,
    completionButton?: string,
    formKey?: string
}

const Form: React.FC<FormProps> = ({
    heading, caption, questions = [], redirectOnComplete, completionButton, formKey
}) => {
    const navigate = useNavigate()
    
    const dispatch = useAppDispatch()

    const requiredQuestions: Array<number> = questions
        .filter(q => q.required).map((_q, i) => i + 1)
    localStorage.setItem("requiredQuestions", JSON.stringify(requiredQuestions))

    useEffect(() => {
        dispatch(checkRequiredAnswers(formKey))
    }, [])

  return (
    <form 
        className={classNames(
            cls.form,{},
            [questions.length <= 1 ? cls.simple : cls.extended]
        )}>
        {heading &&
            <Heading text={heading} />
        }
        {caption && 
            <Caption text={caption.text} theme={caption.theme} />
        }
        {questions.map((question,index) =>
            <Rating
                key={index}
                label={question.label}
                required={question.required}
                theme={question.theme}
                buttons={question.buttons}
                questionID={index + 1} 
                boundsCaption={question.boundsCaption}
                formKey={formKey ?? ""}
                redirectOnAnswer={completionButton ? false : redirectOnComplete}
            />
        )}
        {completionButton && 
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    if (questions.length > 0) {
                        retrieveAnswers()
                        localStorage.setItem("stage", "completed")
                    }
                    if (redirectOnComplete === AppRoutes.RUTUBE) {
                        window.location.href = redirectOnComplete
                    } else {
                        navigate(redirectOnComplete)
                    }
                }}
                label={completionButton}
                theme={questions.length <= 1
                    ? ButtonThemes.FIXED 
                    : ButtonThemes.STRETCHING
                }
            />
        }
    </form>
  )
}

export default Form