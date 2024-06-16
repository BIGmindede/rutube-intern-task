import { AppRoutes } from "app/providers/router/config/routerConfig"
import React from "react"
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
                completionButton="Перейти на платформу"
                redirectOnComplete={AppRoutes.RUTUBE}
            />
        </section>
    </main>
  )
}

export default ThanksPage