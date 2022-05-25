import './styles.css'
import {useState} from 'react'

function InputSearch({callback}){
    const [input, setInput] = useState()

    return(
        <form className='inputSearch' onSubmit={(event) => {
            event.preventDefault()
            callback(input)}}>
            <input placeholder='Digitar Pesquisa' value={input} onChange={(event) => setInput(event.target.value)} ></input>
            <button>Pesquisar</button>
        </form>
    )
}

export default InputSearch