import './styles.css'
import CartProduct from './../CartProduct'
import CartTotal from './../CartTotal'

function Cart({currentSale, callback,removeAll}){
       
    const total = currentSale.reduce((a,b) => a + b.price,0)
    

    return (
        <div>
        {currentSale.length>0?
        <div className='cartArea'>
            <div className='cart'>
                <div>
                    <h2>Carrinho de Compras</h2>
                </div>
                <ul>
                    {currentSale.map((current) => <CartProduct key={current.id} current={current} callback={()=> callback(current)}/>)}
                </ul>            
            </div>
            <CartTotal cartTotal={total} removeAll={removeAll} />
        </div>

         :

        <div className='cart'>
            <div>
            <h2>Carrinho de Compras</h2>
            </div>
            <section>
                <h2>Sua sacola está vazia</h2>
                <p>Adicione itens</p>
            </section>
        </div>
        }
    </div>
    )
}

export default Cart