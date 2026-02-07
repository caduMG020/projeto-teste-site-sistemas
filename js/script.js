let total = 0;

function adicionarAoCarrinho(nome, preco) {
  const lista = document.getElementById("lista-carrinho");

  const item = document.createElement("li");
  item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

  lista.appendChild(item);

  total += preco;
  document.getElementById("total").textContent = total.toFixed(2);
}
