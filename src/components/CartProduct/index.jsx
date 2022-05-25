import './styles.css'

function CartProduct({current, callback}){

    return(
        <li className='cartProduct'>
            <figure>
                <img src={current.img} alt='imagem'></img>
            </figure>
            <div className='cartDados'>
                <h2>{current.name}</h2>
                <p>{current.category}</p>
            </div>
            <button onClick={()=> callback(current)}>Remover</button>
        </li>
    )

}

export default CartProduct