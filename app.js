let nomes = [];

//funcao para adicionar amigos
function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value;

  if (!nome) {
    alert('O campo não pode estar vazio, por favor digite um nome');
    return;
  }

  nomes.push(nome);
  input.value = '';
  input.focus();
  atualizarLista();
}

//funcao de sortear amigo
function sortearAmigo() {
  let resultado = document.getElementById('resultado');

  if (nomes.length === 0) {
    alert('A lista está vazia. Adicione nomes antes de sortear');
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * nomes.length);
  let nomeSorteado = nomes[indiceAleatorio];
  resultado.innerHTML = 'Seu amigo secreto é: ' + nomeSorteado;
}

//funcao de atualizar lista do array
function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  nomes.forEach(nome => {
    let listaNomes = document.createElement('li');
    listaNomes.textContent = nome;
    lista.appendChild(listaNomes);
  });
}
