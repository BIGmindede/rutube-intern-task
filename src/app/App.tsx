import React from "react"
import './styles/index.scss'
import Header from "widgets/Header/Header"
import Router from "./providers/router/UI/Router"


const App: React.FC = () => {

  return (
    <>
        <Header />
        <Router />
    </>
  )
}

export default App
