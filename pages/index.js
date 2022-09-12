import globalStyles from '../style/global.js';

const Home = () => {
    
    return (
        <>  
          <style jsx global>{`${globalStyles}`}</style>
            <h1>Estados</h1>
            <h2>Selecione um jogo abaixo</h2> 
            <h6>(Prometo que a próxima página é melhor estilizada)</h6>
            <a href='/Estados-Unidos'><h3>Estados do Estados Unidos</h3></a>
            <a href='/Brasil'><h3>Estados do Brasil</h3></a>
        </>
    )
}

export default Home