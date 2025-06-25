import './style.css'


const Cep = () => {
    return (
            <div className="container">
                <h1>🔍 Consulta de CEP</h1>
                <form id="cep-form">
                    <input type="text" placeholder="Digite o cep:" maxlength="9" pattern="[0-9]{5}-[0-9]{3}" id="input_cep" required></input>
                    <button type="submit" id="btn-buscar">Buscar</button>
                </form>
                <div className="resultado" id="resultado">
                    <p>Logradouro: <span id="logradouro">--</span></p>
                    <p>Bairro: <span id="bairro">--</span></p>
                    <p>Região: <span id="regiao">--</span></p>
                    <p>Estado: <span id="estado">--</span></p>
                </div>
            </div>
    )
}

export default Cep