# nodejs-react-bitcoin-visualizer

Projeto criado para o teste técnico da Trybe.
O projeto foi desenvolvido em Node JS e Angular.

## Instruções para executar o projeto
 - Para rodar o projeto é necessário ter o Node JS instalado na máquina 
 - Clonar o projeto
 - Criar um arquivo `api/.env` seguindo o padrão de `api/.env.example` e especificar uma porta para o servidor rodar (a porta padrão é a 3001)
 - Caso escolha uma porta diferente da padrão, editar o arquivo `web/src/config/base-url.json` para inserir a porta correta na url do backend
 - Para iniciar o back-end, executar o comando `npm i`, seguido do comando `npm start` na pasta `api/`
 - Para iniciar o front-end, executar o comando `npm i`, seguido do comando `ng s` na pasta `web/`. **Caso não tenha o Angular instalado na máquina**, versões mais atuais do NPM (≥ 5.2.0) permitem substituir os dois comandos acima por `npx ng s`
	- caso por algum motivo o NPX não esteja instalado, é preciso instalá-lo
 - Acessar o frontend pela url `localhost:4200`

## Considerações
 - Não foram implementados testes automatizados, o motivo foi falta de tempo mesmo pois a semana foi corrida

## Melhorias
 - Adicionar uma camada de model ao backend
 - Implementar testes automatizados
 - Melhorar a lógica para lidar com as responses 400 e 401
 - Melhorar visual
 - Consertar um pequeno bug na mensagem de erro do formulário de login



Estou à disposição para qualquer esclarecimento.