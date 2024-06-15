import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "../config/routerConfig"
import { MainPage } from "pages/MainPage"
import { ExtendedPage } from "pages/ExtendedPage"
import { ThanksPage } from "pages/ThanksPage"
import { AlreadyPassedPage } from "pages/AlreadyPassedPage"
import React from "react"

const Router: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path={AppRoutes.MAIN} element={<MainPage/>}/>
        <Route path={AppRoutes.EXTENDED} element={<ExtendedPage/>}/>
        <Route path={AppRoutes.THANKS} element={<ThanksPage/>}/>
        <Route path={AppRoutes.ALREADY_PASSED} element={<AlreadyPassedPage/>}/>
    </Routes>
  )
}

export default Router