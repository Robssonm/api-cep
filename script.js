function buscarcep(){
    const cep = document.getElementById('cep').value;
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`

    fetch(url)
        .then(response => response.json())
        .then(data => {const EnderecoCompleto = `Endereço: ${data.street},${data.neighborhood}, ${data.city} - ${data.state}`;
            document.getElementById('endereco').innerHTML = EnderecoCompleto})
    console.log('deu')
        .catch(() => {
            document.getElementById('endereco').innerHTML='Erro ao buscar cep.';
        })
}