import { AppRoutes } from "app/providers/router/config/routerConfig"
import React from "react"
import { ButtonThemes } from "shared/UI/Button/Button"
import { CaptionThemes } from "shared/UI/Caption/Caption"
import Image from "shared/UI/Image/Image"
import Form from "widgets/Form/Form"

const ThanksPage: React.FC = () => {
  return (
    <main>
        <section>
            <Image pathToFile="thanks.png" maxWidth={524} maxHeight={232} />
            <Form
                heading="Спасибо за обратную связь"
                caption={{text:"Это поможет нам улучшить сервис", theme: CaptionThemes.BASIC}}
                completionButton={{label: "Перейти на платформу", theme: ButtonThemes.FIXED}}
                redirectOnComplete={AppRoutes.RUTUBE}
            />
        </section>
    </main>
  )
}

export default ThanksPage