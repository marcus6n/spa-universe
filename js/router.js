export class Router {
  routes = {}; // dicionario de rotas

  add(routeName, page) { // adiciona uma rota passando o nome e a pagina "page/rota"
    this.routes[routeName] = page; // adiciona a rota ao dicionario
  }

  route(event) { // funcao que recebe um evento
    event = event || window.event; // se o evento for nulo, recebe o evento do window
    event.preventDefault(); // previne o comportamento padrao do evento

    window.history.pushState({}, "", event.target.href); // adiciona um novo estado ao historico do navegador

    this.handle(); // chama a funcao handle
  }

  handle() { // funcao que manipula as rotas
    const { pathname } = window.location; // pega o pathname da url
    const route = this.routes[pathname] || this.routes[404]; // pega a rota correspondente ao pathname ou a rota 404
    fetch(route) // faz uma requisicao a rota
      .then((data) => data.text()) // pega o texto da requisicao
      .then((html) => { // pega o html
        document.querySelector("#app").innerHTML = html; // adiciona o html ao elemento com id app
      });
  }
}