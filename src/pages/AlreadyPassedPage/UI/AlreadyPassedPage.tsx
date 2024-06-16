import { AppRoutes } from "app/providers/router/config/routerConfig"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CaptionThemes } from "shared/UI/Caption/Caption"
import Image from "shared/UI/Image/Image"
import Form from "widgets/Form/Form"

const AlreadyPassedPage: React.FC = () => {
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