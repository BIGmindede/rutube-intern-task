import { Route, Routes } from "react-router-dom"
import { RouterPaths } from "../config/routerConfig"
import { MainPage } from "pages/MainPage"
import { ExtendedPage } from "pages/ExtendedPage"
import { ThanksPage } from "pages/ThanksPage"
import { AlreadyPassedPage } from "pages/AlreadyPassedPage"
import React from "react"

const Router: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path={RouterPaths.main} element={<MainPage/>}/>
        <Route path={RouterPaths.extended} element={<ExtendedPage/>}/>
        <Route path={RouterPaths.thanks} element={<ThanksPage/>}/>
        <Route path={RouterPaths.already_passed} element={<AlreadyPassedPage/>}/>
    </Routes>
  )
}

export default Router