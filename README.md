Requisitos para configurar o projeto
================================

- Node.js. Obs: versão usada foi 12.13.0
- Npm. Obs: versão usada foi 6.9.0
- Docker. Obs: versão usado foi 19.03.6
- Docker compose. Obs: versão usado foi 1.18.0
- Git
- Executar git clone git@github.com:tiago123456789/CHANGELLE-MUNDIALE.git
- Accesar projeto é criar um diretório chamado **logs** na raiz do projeto
- Criar um arquivo chamado **.env** baseado no arquivo **.env.example** é adicionar as informações necessárias.
- Executar comando npm install dentro da raiz do projeto para instalar as dependências do projeto.


Instruções para rodar o projeto:
=================================

- Colocar as informações necessárias no arquivo **.env**
- Executar o comando: **docker-compose up -d** para subir o container docker com o redis para fazer cache das informações.
- Executar o comando: **npm run start:dev** para rodar o projeto.
- Para fazer testar a funcionalidade acesse no navergador **/api/docs**  

Instruções para rodar os testes do projeto:
============================================

- Criar um arquivo chamado **.env.testing** baseado no arquivo **.env.example** é adicionar as informações necessárias.
- Colocar as informações necessárias no arquivo **.env.testing**
- Executar o comando: **docker-compose up -d** para subir o container docker com o redis para fazer cache das informações.
- Executar o comando: **npm run test** para executar os testes unitários e de integração do projeto.

Instruções para fazer build do projeto para produção:
======================================================

- Colocar as informações necessárias no arquivo **.env**. Obs: Colocar as seguintes informações no arquivo **.env**:
```
    ENV=prod
```
- Executar o comando: **npm run build** para fazer build do projeto para fazer com que o código do projeto seja transpilado é transformado em uma versão mais antiga para não ter problema por não suportar as novas funcionalidades do javascript.

Explicando o que é cada informação no arquivo .env:
=====================================================

- **ENV** é o ambiente em que o projeto está sendo executado.
- **PORT** é a porta que o servidor http ficará sendo escutando para receber requesições.
- **REDIS_HOST** é o endereço ip ou domínio da máquina que está rodando o redis.
- **REDIS_PORT** é a porta em que o serviço do redis usa.
- **SWAGGER_PATH_ROUTES** é o caminho de onde estão as rotas da aplicação com a documentção usada pelo swagger para criar o que é disponibilizado no endereço */api/docs*.
- **APP_URL** é o endereço que a aplicação está rodando. Exemplo "http://localhost:3000"





