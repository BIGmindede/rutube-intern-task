import { AppRoutes } from "app/providers/router/config/routerConfig"
import { RatingThemes } from "features/Rating/Rating"
import React from "react"
import { Link } from "react-router-dom"
import { CaptionThemes } from "shared/UI/Caption/Caption"
import Image from "shared/UI/Image/Image"
import Form from "widgets/Form/Form"

const MainPage: React.FC = () => {
    const questions = [
        {
            buttons: [0,1,2,3,4,5,6,7,8,9],
            theme: RatingThemes.GRID,
            boundsCaption: {left: "Хуже некуда", right: "Отлично"}
        }
    ]

    const formCaptionText = `Запрос закрыт.Пожалуйста, оцените качество 
                            предоставленного сервиса по данному обращению,
                            используя шкалу от 0 до 9, где 0
                            является «Хуже некуда» и 9 — «Отлично».`

  return (
    <main>
        <section>
            <Image pathToFile="main.png" maxWidth={455.36} maxHeight={200}/>
            <Form
                heading="Уважаемый клиент!"
                caption={{
                    text: formCaptionText,
                    theme: CaptionThemes.BASIC
                }}
                questions={questions} 
                redirectOnComplete={AppRoutes.EXTENDED}
                formKey="Оценка обращения"
            />
        </section>
    </main>
  )
}

export default MainPage