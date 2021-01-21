## Projeto de Introdução ao Backend LabenuSystem

- Criação de um sistema que represente o básico da organização de uma escola que possui as seguintes entidades:

```sh
1. Estudantes 

    Representa estudantes da instituição. Possuem:
    id, nome, email, data de nascimento e os principais hobbies deles.
``` 
```sh
2. Docente

    Representa docentes da instituição. Possuem: 
    id, nome, email, data de nascimento e todas as especialidades deles.
 ```
 ```sh
3. Turma

    Composta das seguintes características: 
    id, nome, data de início, data de término, lista de professores responsáveis,  lista de alunos 
    e módulo atual em que a turma está.
 ```

 

### Funcionalidades básicas:

```sh
→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id;
 ```

### Desafios:

 ```sh
→ Exibir estudantes de uma turma;

→ Exibir docentes de uma turma;

→ Exibir estudantes que possuam os mesmos hobbies;

→ Remover estudante de uma turma;

→ Remover estudante;

→ Remover docente de uma turma;

→ Mudar estudante de turma;
 ```

## Tecnologias Utilizadas
```
Node
Express
Cors
Knex
MySQL
dotenv
```

## Ferramentas para testar/baixar o projeto:
- Você irá precisar instalar o 
→ [Git](https://git-scm.com/)
→ [NodeJS](https://nodejs.org/pt-br/download/) 
→ [npm](https://www.npmjs.com/get-npm) 
→ [Workbench- MySQL](https://dev.mysql.com/downloads/workbench/) 
→ [Postman](https://www.postman.com/downloads/)

```bash
# Versões mínimas ou superiores.

$ node -v
v12.19.0

$ npm -v
6.14.8
```



## Como utilizar: 
```
# Clone o repositório
$ git clone https://github.com/future4code/dumont-labenu-system2.git
```
```
# Entre no diretório
$ cd dumont-labenu-system2
```
```
# Instale as dependências
$ npm install
```
```
# Crie um arquivo .env na raiz
DB_HOST = Coloque aqui seu endereço do banco de dados
DB_USER = Coloque aqui seu usuário
DB_PASSWORD = Coloque aqui sua senha
DB_NAME = Coloque aqui seu nome 
```

```
# Crie as tabelas:
npm run createTable
```
```
# Popule as tabelas:
npm run populateTable
```
```
# Rode o projeto na versão Dev:
npm run dev
```
```
# Rode o projeto na versão Produção:
npm run start
```
```
# Inicie o localhost
$ npm start
```

```
# Teste no Postman:
$ Baixe o arquivo LabenuSystem.postman_collection.json
$ Abra a ferramenta Postman
$ Importe o arquivo e teste as rotas =)
```

### Desenvolvido com 💙️ por

<a href="https://www.linkedin.com/in/bianca-cmendes/" target="_blank">***Bianca Mendes***</a>
<br/> 
<a href="https://www.linkedin.com/in/ricardo-mejolaro/" target="_blank">***Ricardo Mejolaro***</a>
<br/> 
<a href="https://www.linkedin.com/in/tainah-bernardo/" target="_blank">***Tainah Boarini Bernardo***</a>
<br/> 
