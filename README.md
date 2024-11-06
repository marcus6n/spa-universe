## SPA Universe

Este é um projeto de uma aplicação de página única (SPA) que permite navegar entre diferentes páginas sem recarregar a página inteira. A aplicação utiliza JavaScript para gerenciar as rotas e carregar o conteúdo dinamicamente.

### Estrutura do Projeto

- `index.html`: Página principal que contém o layout básico e os links de navegação.
- `router.js`: Arquivo JavaScript que gerencia as rotas da aplicação.
- `index.js`: Arquivo JavaScript principal que inicializa o roteador e define as rotas.
- `css/`: Diretório que contém os arquivos CSS para estilização.
  - `index.css`: Arquivo CSS principal que importa os estilos globais e específicos das páginas.
  - `global.css`: Estilos globais aplicados a toda a aplicação.
  - `header.css`: Estilos específicos para o cabeçalho.
  - `home.css`: Estilos específicos para a página inicial.
  - `universe.css`: Estilos específicos para a página "O Universo".
  - `explore.css`: Estilos específicos para a página "Exploração".
  - `error.css`: Estilos específicos para a página de erro 404.
- `pages/`: Diretório que contém os arquivos HTML das páginas.
  - `home.html`: Página inicial.
  - `the-universe.html`: Página "O Universo".
  - `explore.html`: Página "Exploração".
  - `404.html`: Página de erro 404.

### Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Instale as dependências executando o comando:
   ```bash
   npm install
   ```
5. Inicie o servidor de desenvolvimento executando o comando:
   ```bash
   npm start
   ```
6. Abra o navegador e acesse `http://localhost:3000` para ver a aplicação em execução.

### Funcionalidades

- Navegação entre páginas sem recarregar a página inteira.
- Roteamento dinâmico utilizando a API de histórico do navegador.
- Estilização responsiva e moderna utilizando CSS.

### Estrutura de Arquivos

```plaintext
spa-universe/
├── css/
│   ├── error.css
│   ├── explore.css
│   ├── global.css
│   ├── header.css
│   ├── home.css
│   ├── index.css
│   └── universe.css
├── js/
│   ├── index.js
│   └── router.js
├── pages/
│   ├── 404.html
│   ├── explore.html
│   ├── home.html
│   └── the-universe.html
├── assets/
│   └── logo.svg
├── .gitignore
├── index.html
├── package.json
└── README.md
```

### Autor

Este projeto foi desenvolvido por [marcus6n](https://github.com/marcus6n).

### Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [`LICENSE`](https://github.com/marcus6n/spa-universe/blob/main/LICENSE) para obter mais informações.