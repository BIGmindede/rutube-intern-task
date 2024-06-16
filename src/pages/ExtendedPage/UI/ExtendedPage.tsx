import { RatingThemes } from "features/Rating/Rating"
import { CaptionThemes } from "shared/UI/Caption/Caption"
import Form from "widgets/Form/Form"
import React from "react"
import { AppRoutes } from "app/providers/router/config/routerConfig"
import { ButtonThemes } from "shared/UI/Button/Button"

const ExtendedPage: React.FC = () => {
    const questions = [
        {
            label: "Как быстро вы получили ответ от клиентского сервиса RUTUBE?",
            required: true,
            theme: RatingThemes.COLUMN,
            buttons: ["Быстрее, чем ожидал", "Как и ожидал", "Медленнее, чем ожидал"]
        },
        {
            label: "Клиентский серввис RUTUBE помог в решении проблемы?",
            required: true,
            theme: RatingThemes.ROW,
            buttons: [1,2,3,4,5]
        },
        {
            label: "Специалист RUTUBE хорошо изъяснялся и владел языком?",
            required: true,
            theme: RatingThemes.ROW,
            buttons: [1,2,3,4,5]
        },
        {
            label: "Специалист RUTUBE был отзывчив?",
            required: true,
            theme: RatingThemes.ROW,
            buttons: [1,2,3,4,5],
        },
        {
            label: "Специалист RUTUBE был компетентен?",
            required: true,
            theme: RatingThemes.ROW,
            buttons: [1,2,3,4,5],
        },
        {
            label: "Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?",
            required: true,
            theme: RatingThemes.ROW,
            buttons: [0,1,2,3,4,5,6,7,8,9],
        }
    ]

    const formCaptionText = "Пожалуйста, ответьте на дополнительные вопросы."

    return (
        <main>
            <section>
                <Form 
                    caption={{text: formCaptionText, theme: CaptionThemes.PALE}} 
                    questions={questions}
                    redirectOnComplete={AppRoutes.THANKS}
                    completionButton={{label: "Отправить ответы", theme: ButtonThemes.FIXED}}
                    formKey="Дополнительные вопросы"
                />
            </section>
        </main>
    )
}

export default ExtendedPage