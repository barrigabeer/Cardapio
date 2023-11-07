document.addEventListener('DOMContentLoaded', function() {
  // URL do arquivo JSON
  const jsonURL = 'produtos.json';

  // Elemento HTML onde os produtos serão exibidos
  const panelinhasContainer = document.getElementById('panelinhas');
  const porcoesContainer = document.getElementById('porcoes');
  const petiscosContainer = document.getElementById('petiscos');
  const feijoadaContainer = document.getElementById('feijoada');
  const semalcContainer = document.getElementById('semalcool');
  const lataContainer = document.getElementById('lata');
  const longneckContainer = document.getElementById('long-neck');
  const garrafaContainer = document.getElementById('garrafa');
  const lanchesContainer = document.getElementById('lanches');
  const sobremesasContainer = document.getElementById('sobremesas');
  const whiskyContainer = document.getElementById('whisky');
  const vodkaContainer = document.getElementById('vodka');
  const ginContainer = document.getElementById('gin');
  const tequilaContainer = document.getElementById('tequila');
  const cigarrosContainer = document.getElementById('cigarros');
  const galinhaContainer = document.getElementById('galinha');


  // Função para exibir os produtos da seção "PANELINHAS" na página
  function exibirProdutos(produtos) {
      produtos.PANELINHAS.forEach(produto => {
          const produtoElement = document.createElement('section');
          produtoElement.innerHTML = `
              <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
                <h1 class="prod">${produto.produto}</h1>
                <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
                <span class="descrip">${produto.descrição}</span>
              </div>
          `;
          panelinhasContainer.appendChild(produtoElement);
      });
      produtos.PORÇÕES.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        porcoesContainer.appendChild(produtoElement);
    });
    produtos.PETISCOS.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        petiscosContainer.appendChild(produtoElement);
    });
    produtos.FEIJOADA.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        feijoadaContainer.appendChild(produtoElement);
    });
    produtos.GALINHA.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        galinhaContainer.appendChild(produtoElement);
    });
    produtos['BEBIDAS SEM ÁLCOOL'].forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        semalcContainer.appendChild(produtoElement);
    });
    produtos['BEBIDAS COM ÁLCOOL'].LATA.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        lataContainer.appendChild(produtoElement);
    });
    produtos['BEBIDAS COM ÁLCOOL'].LONG.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        longneckContainer.appendChild(produtoElement);
    });
    produtos['BEBIDAS COM ÁLCOOL'].GARRAFA.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        garrafaContainer.appendChild(produtoElement);
    });
    produtos['DESTILADOS'].WHISKY.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        whiskyContainer.appendChild(produtoElement);
    });
    produtos['DESTILADOS'].VODKA.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        vodkaContainer.appendChild(produtoElement);
    });
    produtos['DESTILADOS'].GIN.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        ginContainer.appendChild(produtoElement);
    });
    produtos['DESTILADOS'].TEQUILA.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        tequilaContainer.appendChild(produtoElement);
    });
    produtos.LANCHES.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        lanchesContainer.appendChild(produtoElement);
    });
    produtos.SOBREMESAS.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        sobremesasContainer.appendChild(produtoElement);
    });
    produtos.CIGARROS.forEach(produto => {
        const produtoElement = document.createElement('section');
        produtoElement.innerHTML = `
            <div class="item-produto ${produto.ativo ? '' : 'inativo'}">
              <h1 class="prod">${produto.produto}</h1>
              <strong class="preco">R$ ${produto.preço.toFixed(2)}</strong>
              <span class="descrip">${produto.descrição}</span>
            </div>
        `;
        cigarrosContainer.appendChild(produtoElement);
    });
  }

  // Carrega o arquivo JSON e exibe os produtos na página
  fetch(jsonURL)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Erro na requisição: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          exibirProdutos(data);
      })
      .catch(error => {
          console.error(`Erro: ${error.message}`);
      });
});