let total = 0;

function adicionarAoCarrinho(nome, preco) {
  const lista = document.getElementById("lista-carrinho");

  const item = document.createElement("li");
  item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

  const botaoRemover = 
document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.style.marginLeft = "10px";

  botaoRemover.onclick = function () {
    lista.removeChild(item);
    total -= preco;
    
  document.getElementById("total").textContent = total.toFixed(2);
  };
  
  item.appendChild(botaoRemover);
  lista.appendChild(item);

  total += preco;
  
  document.getElementById("total").textContent = total.toFixed(2);
}
