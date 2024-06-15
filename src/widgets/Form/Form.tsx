import { AppRoutes } from 'app/providers/router/config/routerConfig'
import Rating, { RatingThemes } from 'features/Rating/Rating'
import React from 'react'
import Caption, { CaptionThemes } from 'shared/UI/Caption/Caption'
import cls from './Form.module.scss'
import Heading from 'shared/UI/Heading/Heading'
import Button, { ButtonThemes } from 'shared/UI/Button/Button'
import { classNames } from 'shared/lib/classNames'
import { useNavigate } from 'react-router-dom'

interface FormProps {
    heading?: string,
    caption?: {
        text: string,
        theme: CaptionThemes
    }
    questions: Array<{
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
    completionButton?: {
        label: string,
        theme: ButtonThemes
    }
}

const Form: React.FC<FormProps> = ({
    heading, caption, questions, redirectOnComplete, completionButton
}) => {
    const navigate = useNavigate()

  return (
    <form className={classNames(cls.form, {[cls.simple]: questions.length <= 1}, [])}>
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
                redirectOnAnswer={completionButton ? false : redirectOnComplete}
            />
        )}
        {completionButton && 
            <Button 
                onClick={() => {
                    if (questions.length > 0) {
                        // Добавляем в localStorage ответы, пока что не делаем
                    }
                    navigate(redirectOnComplete)
                }}
                label={completionButton.label}
                theme={completionButton.theme}
            />
        }
    </form>
  )
}

export default Form