import './styles.css'
import Product from '../Product'

function ProductList({vitrineProducts, filteredProducts, callback}){
    let showProducts = []    
    if(filteredProducts.length>0){
        showProducts = filteredProducts
        }
        else{
            showProducts = vitrineProducts
        }

    return(
        <ul className='productList'>
            {showProducts.map((product) => <Product key={product.id} product={product} callback={()=>callback(product)}/> )}
        </ul>
    )
}

export default ProductList