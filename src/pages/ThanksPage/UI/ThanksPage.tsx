import { AppRoutes } from "app/providers/router/config/routerConfig"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CaptionThemes } from "shared/UI/Caption/Caption"
import Image from "shared/UI/Image/Image"
import Form from "widgets/Form/Form"

const ThanksPage: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const stage = localStorage.getItem("stage")
    
        if (!stage) {
            navigate(AppRoutes.MAIN)
        }
        else if (stage === "extended") {
            navigate(AppRoutes.EXTENDED)
        }
    }, [])
    
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