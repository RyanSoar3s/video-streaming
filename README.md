# 📺 Serviço de Streaming

Projeto de um **serviço de streaming** desenvolvido com foco em organização de conteúdos (filmes, séries e desenhos), navegação dinâmica e boas práticas de arquitetura frontend.

---

## 🧭 Visão Geral

Este projeto simula uma plataforma de streaming onde o usuário pode:

* Navegar por catálogos de filmes, séries e desenhos
* Pesquisar conteúdos por título
* Selecionar e visualizar qualquer conteúdo de sua escolha
* Interagir com uma interface responsiva

O objetivo principal é **estudo e prática de conceitos modernos de desenvolvimento web**, como componentes reutilizáveis, estado reativo e organização de dados.

---

## 🚀 Tecnologias Utilizadas

* **Angular** (Signals, Components, Services)
* **TypeScript**
* **HTML5**
* **Tailwindcss**
* **NodeJS** (Servidor)
* **MongoDB** (Banco de Dados)
* **Vercel**

---

## 🗂️ Estrutura do Projeto

```text
server/
├── src/
|   ├── config/           # Configuração para envio de email com nodemailer
|   ├── controllers/      # Controladores de rotas
|   ├── db/               # Configuração do banco de dados
|   ├── middleware/       # Middleware para as rotas
|   ├── routes/           # Definição das rotas
|   ├── services/         # Serviços utilizados pelo servidor
|   ├── utils/            # Utilitários
|   ├── app.js
|   ├── server.js
├── .gitignore
├── package-lock.json
└── package.json

src/
├── app/
│   ├── core/              # Serviços, guardas de rotas, interceptores e resolvedores
│   ├── features/          # Funcionalidades principais
│   │   ├── pages/         # Páginas (home, Catálogo, etc.)
│   │   └── shared/        # Componentes reutilizáveis
│   ├── mocks              # Mocks para testes unitários
│   ├── models/            # Tipagens e interfaces
│   ├── types/             # Tipos globais
│   └── app.component.*
├── assets/
└── ...
```

---

## 📦 Modelagem de Dados

Os conteúdos que são enviados pelo servidor, seguem o seguinte formato:

### Estrutura do tipo:

```ts
type TBaseMedia = {
  type: Array<"movie" | "serie" | "animation">,
  id: number,
  title: string,
  description: string,
  year: number,
  genre: Array<string>,
  rating: number,
  imagesUrl: Array<string>,
  video: {
    url: string

  }

};

type TMovie = TBaseMedia;

type TSerie = TBaseMedia & {
  seasons: number,
  episodes: number

};

type TAnimation = TBaseMedia & {
  studio: string

};

type TCategorie = TMovie | TSerie | TAnimation;

export type TContent = {
  sectionTitle: string,
  items: Array<TCategorie>

};

type TContentDivision = "All" | "MostWatched" | "Releases" | "Movies" | "Series" | "Animations";

export type TVideoStreaming = {
  [ K in TContentDivision ]: TContent

};

```

---

## 🔍 Funcionalidades Principais

### 🔎 Busca por Título

* Pesquisa reativa baseada em texto
* Filtragem de conteúdos por gênero
* Exibição de mensagem quando nenhum resultado é encontrado

### 🧠 Gerenciamento de Estado

* Uso de **Signals** (`signal`, `computed`, `effect`)
* Estado centralizado em services
* Separação clara entre lógica e apresentação

### 📱 Responsividade

* Layout adaptado para diferentes tamanhos de tela
* Breakpoints para mobile, tablet e desktop

---

## 🧪 Testes

* Testes unitários com **Angular Testing Utilities**
* Cobertura de componentes e serviços principais

```bash
ng test
```

---

## ▶️ Como Executar o Projeto

### Instalando Dependências

```bash
# instalar dependências
npm install
```
### Backend

```bash
# rodar servidor
cd server
npm run dev
```

### Frontend

```bash
# rodar em modo desenvolvimento
ng serve

# acessar no navegador
http://localhost:4200
```

### 🔐 Variáveis de Ambiente

Para executar o servidor, é necessário criar um arquivo `.env` no diretório `server/` com as seguintes variáveis:

```env
# MongoDB
MONGODB_URI=your_mongodb_uri_here

# Nodemailer (serviço de email)
EMAIL=your_email_here
PASS=your_email_password_here

# Google OAuth
CLIENT_ID_GOOGLE=your_google_client_id_here

# JWT
ACCESS_SECRET=your_access_token_secret
REFRESH_SECRET=your_refresh_token_secret

# Servidor
PORT=4000
```



---

## 🌐 Deploy

O projeto pode ser publicado utilizando plataformas como:

* **Vercel**
* **Netlify**
* **Firebase Hosting**

## 👤 Autor

**Ryan Soares**
Projeto desenvolvido para fins educacionais e portfólio.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE)
