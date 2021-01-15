let tabelaDepreços = [
  { posicao: 1, fruta: "maçā", preco: 1.5 },
  { posicao: 2, fruta: "banana", preco: 1.6 },
  { posicao: 3, fruta: "melancia", preco: 5.3 },
  { posicao: 4, fruta: "pera", preco: 1.2 },
  { posicao: 5, fruta: "laranja", preco: 1.0 },
];

let controleEstoqueFrutas = [];

//criando tabela de preço
function tabelaPrecos(array) {
  for (pos in array) return tabelaElemento(array[pos]);
}

function tabelaElemento(el) {
  let tabela = document.getElementById("tabela");

  let criarTabela = tabelaDepreços
    .map((el) => {
      return `
       <tr>
        <td>
         ${el.posicao} 
        </td>
        <td>
        ${el.fruta}
       </td>
       <td>
       ${el.preco.toLocaleString("pt-BR", {
         style: "currency",
         currency: "BRL",
       })} 
      </td>
       </tr>    `;
    })
    .join(" ");
  tabela.innerHTML = `${criarTabela}`;
  return el;
}

tabelaPrecos(tabelaDepreços);

function pedidoCliente() {
  let numero = Number(document.getElementById("number").value); // vai ser de acordo preco da tabelaPreco
  let quantidade = Number(document.getElementById("quantidade").value);
  validarInputs(numero, quantidade);
}

function validarInputs(numero, quantidade) {
  if (numero == "" || quantidade == "") {
    alert("Não tem como fazer comprar!");
  } else {
    return calcularPreco(numero, quantidade);
  }
}

function calcularPreco(numero, quantidade) {
  let total = 0;
  for (i = 0, array = tabelaDepreços.length; i < array; i++) {
    if (numero == 1 && numero == tabelaDepreços[0].posicao) {
      total = quantidade * tabelaDepreços[0].preco;
    } else if (numero == 2 && numero == tabelaDepreços[1].posicao) {
      total = quantidade * tabelaDepreços[1].preco;
    } else if (numero == 3 && numero == tabelaDepreços[2].posicao) {
      total = quantidade * tabelaDepreços[2].preco;
    } else if (numero == 4 && numero == tabelaDepreços[3].posicao) {
      total = quantidade * tabelaDepreços[3].preco;
    } else if (numero == 5 && numero == tabelaDepreços[4].posicao) {
      total = quantidade * tabelaDepreços[4].preco;
    }
  }
  return addPrecoArray(numero, quantidade, total);
}

function addPrecoArray(numero, quantidade, total) {
  if (numero > 5) {
    alert("Olá amigo não temos ainda essa fruta!");
  } else {
    controleEstoqueFrutas.push({
      posicao: numero,
      quantidadeFrutas: quantidade,
      valorPg: total,
    });
    document.getElementById("number").value = "";
    document.getElementById("quantidade").value = "";
  }
}

let pedidos = 0;

function finalizarPedido(array) {
  let total = 0;
  for (pos in array) {
    total += array[pos].valorPg;
  }

  pedidos += 1;
  mostrarValorFinal(total);

  let quantidadePedidos = document.getElementById("pedidos");
  quantidadePedidos.innerHTML = `qnt de pedidos : ${pedidos}`;

  return array;
}

function mostrarValorFinal(total) {
  let resposta = document.getElementById("res");
  resposta.innerHTML = `Valor final para o pagamento: ${total.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  )}`;
}