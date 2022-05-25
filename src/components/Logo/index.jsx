import './styles.css'
import img from './img/Logo.png'

function Logo(){

    return (
        <div className='logo'>
            <figure>
                <img src={img} alt='logo'></img>
            </figure>
        </div>
    )

}


export default Logo