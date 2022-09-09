const getCadastroHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
    <form id="formulario">
            <h1>Novo Cliente</h1>
            <label for="">Nome do Cliente</label>
            <input id="owner" placeholder="Digite o seu nome" type="text">
            <br/><br/>
            <label for="">Modelo</label>
            <input id="model" placeholder="Digite o modelo do veículo" type="text">
            <br/><br/>
            <label for="">Tipo</label>
            <select id="type" type="text" placeholder="Selecione o tipo">
                <option value="1">Carro</option>
                <option value="0">Moto</option>
            </select>
            <br/><br/>
            <label for="">Placa</label>
            <input id="label" placeholder="Digite a placa do veículo" type="text">
            <br/><br/>
            <label for="">Observações</label>
            <input id="observation" placeholder="Digite a observação" type="text">
            <br/><br/>
            <div>
                <button id="cancel" type="button">Cancelar</button>
                <button id="save" type="submit">Salvar</button>
            </div>
        </form> `
        main.innerHTML = dadosHtml
}

const getListaClientesHtml = () => {
    const main = document.getElementById('root');
    const dadosHtml = `
    <section>
        <h1>Lista de clientes</h1>
        <table id="tbody">
            <tr>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Tipo</th>
                <th>Observações</th>
                <th><a>Novo</a></th>
            </tr>
        </table>
    </section> `
        main.innerHTML = dadosHtml    
}

export const view = {
    getListaClientesHtml,
    getCadastroHtml
}