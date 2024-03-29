import { useState } from 'react';
import { FiSearch} from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {
  
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch(){

    if(input === ''){
      alert("Por favor, preencha com algum CEP.")
      return;     
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
      
    }catch{
      alert("Ops! Algum erro ao buscar ")
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">De onde é esse CEP?</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite aqui..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>
      

      {Object.keys(cep).length > 0 &&(
        <main className='main'>
        <h2 className='ceptitle'>CEP: {cep.cep}</h2>

        <span className="cepword">{cep.logradouro}</span>
        <span className="cepword">Complemento: {cep.complemento}</span>
        <span className="cepword">{cep.bairro}</span>
        <span className="cepword">{cep.localidade} - {cep.uf}</span>
      </main>
      )}
      
    </div>
  );
}

export default App;
