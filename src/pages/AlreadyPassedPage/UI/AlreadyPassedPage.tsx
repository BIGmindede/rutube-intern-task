import { AppRoutes } from "app/providers/router/config/routerConfig"
import React from "react"
import { CaptionThemes } from "shared/UI/Caption/Caption"
import Image from "shared/UI/Image/Image"
import Form from "widgets/Form/Form"

const AlreadyPassedPage: React.FC = () => {
  return (
    <main>
        <section>
            <Image pathToFile="already_passed.png" maxWidth={524} maxHeight={232}/>
            <Form 
                heading="Вы уже прошли этот опрос"
                caption={{
                    text:"Спасибо, что делитесь мнением и помогаете нам быть лучше",
                    theme: CaptionThemes.BASIC
                }}
                redirectOnComplete={AppRoutes.RUTUBE}
                completionButton="Перейти на RUTUBE"
            />
        </section>
    </main>
  )
}

export default AlreadyPassedPage