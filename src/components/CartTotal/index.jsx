import './styles.css'


function CartTotal({cartTotal, removeAll}){
    const total = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cartTotal)
   

   return( 
   <section className='total'>
        <section className='totalValue'>
        <h2>Total</h2>
        <span>{total}</span>
        </section>
        <button onClick={removeAll}>Remover Todos</button>
    </section>
    )


}

export default CartTotal