# nodejs-react-bitcoin-visualizer

Projeto criado para o teste técnico da Trybe.
O projeto foi desenvolvido em Node JS e Angular.

## Instruções para rodar o projeto
 - Clonar o projeto
 - (opcional) Criar um arquivo .env seguindo o padrão de *.env.example* e especificar uma porta para o servidor rodar
	- a porta padrão é a 3001
 - Rodar o comando _$ npm i_ tanto na pasta api quanto na pasta web
 - Subir tanto o front quanto o back e acessar a aplicação
	- *$ ng s* no front e *$ npm start* no back.

## Considerações
 - As validações foram feitas no frontend e no backend, as de backend acabaram ficando redundantes, mas são requerimentos do teste
	- eu pessoalmente prefiro fazer as validações no front para dar um feedback visual para o usuário sem ele precisar submeter o formulário

## Melhorias
 - Adicionar uma camada de model ao backend
 - Implementar testes automatizados
 - Melhorar visual
 - "Esconder" as urls do backend no frontend
 - Implementar lógica para lidar com as responses 400 e 401
	- atualmente, se um usuário fictício alterasse o código fonte da página e removesse o disable dos botões de submit para submeter dados inválidos, a aplicação quebraria
 - Consertar um pequeno bug na mensagem de erro do formulário de update das moedas



Estou à disposição para qualquer esclarecimento.