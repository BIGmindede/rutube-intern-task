// import { Link } from 'react-router-dom'
import Divider from 'shared/UI/Divider/Divider'
import cls from './Header.module.scss'
import Logo from 'shared/assets/Logo.svg?react'

const Header: React.FC = () => {
  return (
    <header className={cls.header}>
        <nav>
            {/* <Link to="https://rutube.ru"> */}
                <Logo/>
            {/* </Link> */}
        </nav>
        <Divider/>
    </header>
  )
}

export default Header