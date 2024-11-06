import { Router } from "./router.js"; // importa a classe Router do arquivo router.js

const router = new Router(); // instancia a classe Router
router.add("/", "/pages/home.html"); // adiciona a rota / e a pagina home.html
router.add("/the-universe", "/pages/the-universe.html"); // adiciona a rota /the-universe e a pagina the-universe.html
router.add("/explore", "/pages/explore.html"); // adiciona a rota /explore e a pagina explore.html
router.add(404, "/pages/404.html"); // adiciona a rota 404 e a pagina 404.html

router.handle(); // chama a funcao handle

window.onpopstate = () => router.handle(); // adiciona um evento onpopstate ao window que chama a funcao handle
window.route = () => router.route(); // adiciona uma funcao route ao window que chama a funcao route