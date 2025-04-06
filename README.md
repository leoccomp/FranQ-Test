### 📈 Projeto de Monitoramento Financeiro

Este projeto é uma aplicação **frontend** desenvolvida em **React + TypeScript**, com gráficos e dados em tempo real sobre ações e moedas. Utiliza `React Router`, `Zustand`, `React Query` e `Chart.js` para uma experiência fluida e interativa. Também conta com um backend simples (proxy) para contornar problemas de **CORS** ao consumir a API externa.

---

### ⚙️ Tecnologias & Principais Bibliotecas

| Biblioteca                     | Descrição                                                   |
| ------------------------------ | ----------------------------------------------------------- |
| **React 19**                   | Biblioteca principal para construção da interface           |
| **TypeScript**                 | Superset de JavaScript para tipagem estática                |
| **React Router DOM v7**        | Roteamento SPA                                              |
| **Zustand**                    | Gerenciamento de estado global simples e eficiente          |
| **React Query**                | Cache, sincronização e gerenciamento de estados assíncronos |
| **Chart.js + React-Chartjs-2** | Visualização de dados com gráficos                          |
| **Tailwind CSS**               | Utilitário de CSS para estilização rápida e responsiva      |
| **Vite**                       | Empacotador de código extremamente rápido                   |

---

### 📁 Estrutura do Projeto

```
src/
├— components/        # Componentes reutilizáveis (Chart, Header, etc.)
├— hooks/             # Hooks personalizados (ex: logout automático)
├— pages/             # Páginas do app (Login, Signup, Dashboard, Details)
├— services/          # Funções de acesso à API externa
├— store/             # Zustand store para autenticação
└— types/             # Tipagens globais
```

---

### 🚀 Rodando o Projeto Localmente

#### 🔧 Pré-requisitos

- Node.js 18+
- Yarn ou npm
- `pnpm` (opcional)

---

#### 🔹 1. Clonar o Repositório

```bash
git clone https://github.com/leoccomp/FranQ-Test.git
cd FranQ-Test
```

---

#### 🔹 2. Instalar as Dependências

```bash
npm install
# ou
yarn install
```

---

#### 🔹 3. Apenas para conhecimento, existe um pequeno backend (Proxy para evitar CORS) que roda na render.com (https://franq-test-backend.onrender.com)

```bash
git clone https://github.com/leoccomp/FranQ-Test-Backend.git
cd FranQ-Test-Backend
npm install
node server.js
```

> ⚠️ O backend é uma API simples que faz proxy para a API real de dados financeiros. Ele roda por padrão em `http://localhost:3001`.

---

#### 🔹 4. Rodar o Frontend

No diretório raiz do projeto:

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

### 🔐 Autenticação

O sistema utiliza um login simplificado com `Zustand`. Nenhum backend de autenticação real é necessário — os dados são armazenados localmente no `localStorage`.

---

### 📊 Dados em Tempo Real

Os dados são atualizados automaticamente a cada 60 segundos usando `React Query`, e a página de detalhes mostra a variação histórica acumulada com um gráfico dinâmico via `Chart.js`.

---

### 📦 Scripts Úteis

| Comando           | Descrição                                |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia o projeto em modo desenvolvimento |
| `npm run build`   | Compila para produção                    |
| `npm run preview` | Visualiza o build localmente             |

---

### 📌 Licença

MIT — fique à vontade para usar, modificar e compartilhar.
