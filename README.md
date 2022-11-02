# ReLife

## Como executar localmente 💻

- Baixe o projeto para sua máquina com `git clone https://github.com/Atlantis-Fellowship-Instituto-Atlantico/ReLife.git`

- Execute no terminal o comando `npm install` para instalar as dependencias necessárias.

- Utilize o comando `docker-compose up -d` dentro da pasta do projeto , após rodar o container e ele estiver up, basta fazer a conexão com o banco, com pgadmin, dbeaver, utilizando as variaveis que estão dentro do arquivo **docker-compose**.

- Dentro da pasta **src** utilizar o comando `npm run migration:up`, para criar as tabelas dentro do BD.

- Utilizar dentro do BD o comando SQL `insert into roles (role_name) values ('Doador'), ('Receptor')`

- Execute o comando `npm run start` dentro da pasta **src** do projeto, abra o insomnia e importe as requests utilizando o arquivo **RequestsInsominia.json**.

### Pronto agora é só testar os endpoints 😄

## Como executar com o Docker 🐳

- Baixe o projeto para sua máquina com `git clone https://github.com/Atlantis-Fellowship-Instituto-Atlantico/ReLife.git`

- Na pasta 'backend' rode o comando `docker build . -t relife-web` para realizar o build da imagem do projeto.

  - Neste arquivo dockerfile é executado os comandos: 
  
    - `npm install`
    
    - `npm run migration:up`

- Rode o comando `docker-compose up -d` para subir o container do banco de dados e o container da aplicação a partir da imagem que foi gerada com o dockerfile.

  - Neste arquivo docker-compose é executado o comando: 
  
    - `npm run start`

- Após rodar o container e ele estiver up, basta fazer a conexão com o banco, com pgadmin, dbeaver, utilizando as variaveis que estão dentro do arquivo **docker-compose**.

- Utilizar dentro do BD o comando SQL `insert into roles (role_name) values ('Doador'), ('Receptor')`

- Abra o insomnia e importe as requests utilizando o arquivo **RequestsInsominia.json**.

### Pronto agora é só testar os endpoints 😄
