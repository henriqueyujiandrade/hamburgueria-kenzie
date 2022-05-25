import './styles.css'
import Logo from './../Logo'
import InputSearch from '../InputSearch'
function Header({callback}){
    return (
        <header>
            <Logo />
            <InputSearch callback={callback}/>
        </header>
    )
}

export default Header