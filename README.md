# CRUD com Prisma Puro — Tabela Courses

Projeto prático que implementa um **CRUD completo** (Create, Read, Update, Delete) para a tabela `Courses`, utilizando o **Prisma Client** diretamente em scripts Node.js — sem API ou rotas, apenas para fins de aprendizado.

## 🧱 Modelo de dados

```prisma
model Course {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

Banco de dados: **SQLite** (arquivo local `dev.db`), configurado via Prisma.

## 📁 Estrutura do projeto

```
crud-courses/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── prismaClient.js
│   └── Courses/
│       ├── create.js      → Cadastra um novo curso
│       ├── findAll.js     → Lista todos os cursos
│       ├── findById.js    → Busca um curso pelo ID
│       ├── update.js      → Atualiza um curso existente
│       └── delete.js      → Exclui um curso pelo ID
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone <url-do-repositorio>
cd crud-courses
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar as variáveis de ambiente
```bash
cp .env.example .env
```

### 4. Rodar a migração do Prisma (cria o banco SQLite)
```bash
npx prisma migrate dev --name init
```

### 5. Executar as operações de CRUD

**Cadastrar um curso:**
```bash
npm run create
```

**Listar todos os cursos:**
```bash
npm run findAll
```

**Buscar um curso pelo ID** (edite o `COURSE_ID` no arquivo `src/Courses/findById.js`):
```bash
npm run findById
```

**Atualizar um curso** (edite o `COURSE_ID` e os dados no arquivo `src/Courses/update.js`):
```bash
npm run update
```

**Excluir um curso** (edite o `COURSE_ID` no arquivo `src/Courses/delete.js`):
```bash
npm run delete
```

### 6. (Opcional) Visualizar os dados no Prisma Studio
```bash
npx prisma studio
```

## 🛠️ Tecnologias utilizadas

- Node.js
- Prisma ORM
- SQLite
