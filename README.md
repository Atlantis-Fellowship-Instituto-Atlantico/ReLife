# ReLife

## Como executar

Baixe o projeto para sua máquina com `git clone https://github.com/Atlantis-Fellowship-Instituto-Atlantico/ReLife.git`

Execute no terminal o comando `npm install` para instalar as dependencias necessarias.

Com o docker instalado, utilize o comando dentro da pasta do projeto `docker-compose up -d`, após rodar o container e ele estiver up, basta fazer a conexão com o banco, com pgadmin, dbeaver, utilizando as variaveis que estão dentro do arquivo **docker-compose**.

Dentro da pasta **src** utilizar o comando `npm run migration:up`, para criar as tabelas dentro do BD.

Utilizar dentro do BD o comando SQL `insert into roles (role_name)
values 
('Administrador'),
('Instituicao'),
('Doador'),
('Receptor')`

Execute o comando `npm run start` dentro da pasta **src** do projeto, abra o insomnia e importe as requests utilizando o arquivo **RequestsInsominia.json**.

Pronto agora é só testar os endpoints 😄
