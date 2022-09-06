
import { useState } from 'react'

const Home = () => {
    
    return (
        <>
            <h1>Olá Mundo!</h1>
            <Contador/>
        </>
    )
}
const Contador = () => {
    const [contador, setContador] = useState(0)
    function adicionarContador() {
        setContador(contador + 1)
    }
    return (
        <>
        <h2>{contador}</h2>
        <button onClick={adicionarContador}>Adicionar</button>
        </>
        )

}
export default Home