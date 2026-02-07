let total = 0;

function adicionarAoCarrinho(nome, preço) {
  const lista = document.getElementById("lista-carrinho");
  
  const item = document.createElement("li");
  item.textContent = '${nome} - R$ $ {preço.toFixed(2)}';
  
  lista.appendChild(item);
  
  total += preco;

document.getElementById("total").textContent = total.toFixed(2);
}
