import './styles.css'

function Product({product, callback}){
    

    return(
        <li className='product'>
            <figure >
                <img src={product.img} alt='productImage'></img>
            </figure>
            <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <span >{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
                <button onClick={() => callback(product)}>Adicionar</button>
            </div>
        </li>
    )
}

export default Product