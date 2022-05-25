
import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header'
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import ModalSearch from './components/ModalSearch';
import ModalProduct from './components/ModalProduct';



function App() {
  const [vitrineProducts, setVitrineProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [showModalSearch, setShowModalSearch] = useState(false)
  const [showModalProduct, setShowModalProduct] = useState(false)

  const filter = (input) => {
    const filtered = vitrineProducts.filter((product) => product.category.toLowerCase().includes(input.toLowerCase()) || product.name.toLowerCase().includes(input.toLowerCase()))
    if(filtered.length>0){
    setFilteredProducts(filtered)
    }
    else{
      setFilteredProducts(filtered)
      setShowModalSearch(true)
      setTimeout(() => {setShowModalSearch(false)},2000)

    }    
  }

  const handleClick = (productId) =>{
      if(!currentSale.find((product) => product.id === productId.id)){
        setCurrentSale([...currentSale, productId])        
      }
      else{
        setShowModalProduct(true)
        setTimeout(() => {setShowModalProduct(false)},2000)
      }
  }

  const removeItem = (itemId) => {    
    const filter = currentSale.filter((cartProduct) => cartProduct.id !== itemId.id)    
    setCurrentSale(filter)   
  }

  const removeAll = () => {
    setCurrentSale([])
  }
 

  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => setVitrineProducts(response))
    .catch((err) => console.log(err))
  }, [])


  return (
    
    <div className="App">    
        <Header callback={filter} />
        <main className='main'>
          <ProductList filteredProducts={filteredProducts}  vitrineProducts= {vitrineProducts} callback= {handleClick}/>        
          <Cart currentSale= {currentSale} callback= {removeItem} removeAll ={removeAll}/>       
        </main>
        {showModalSearch && <ModalSearch />}
        {showModalProduct && <ModalProduct/>}
    </div>
  );
  
}

export default App;
