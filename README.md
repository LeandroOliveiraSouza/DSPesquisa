# DSPesquisa
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeandroOliveiraSouza/DSPesquisa/blob/main/LICENSE) 

# Sobre o projeto
DSPesquisa é uma aplicação full stack web (leiaute responsivo com breakpoints do bootstrap) e mobile. Construída durante a semana Spring React, organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Composto por duas etapas, a primeira acontece em um aplicativo mobile onde os usuários respondem a pesquisa de preferência de games. A partir das respostas do usuário na aplicação mobile, temos a segunda etapa onde os dados armazenados no banco de dados são apresentados em uma SPA (single page applications) Web, em duas visões, sendo uma gráfica e outra em gride. Os dados do gride estão com paginação.

## Layout web
![Web Home](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-web-intro.png) 
![Web Lista](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-web-lista.png)
![Web Gráficos](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-web-graficos.png)

## Layout mobile
![Web Home](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-iphone-8-plus-intro.png) ![Web Formulário](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-iphone-8-plus-form.png)

## Construção da aplicação
A etapa de análise envolveu a definição das premissas e onjetivo e construção de um wireframe que culminou com modelo figma do projeto. Com base nesse desenho teve inicio a especificação de casos de uso, usando o diagrama da UML e o modelo conceitual seguiu no ASTA por diagrama de classes.

### Diagrama de caso de uso
#### CADASTRAR REGISTRO DA PESQUISA:
1. [OUT] O sistema informa os nomes de todos os games para o respondente, ordenados.
2. [IN] O respondente informa nome, idade e jogo.

#### LISTAR REGISTRO DE PESQUISA:
1. [OUT] O sistema informa uma lista dos registros de pesquisa contendo cada um o instante, nome, idade, plataforma, gênero e título do game, ordenada pelo instante.
2. [IN] O operador do sistema ewb, informa, opcionalmente, uma data incial e data final para filtrar os dados.
3. [OUT] O sistema apresenta a listagem atualizada.

### Modelo de dados
#### Desnormalizados
![Modelo sem normalização](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-dados-desnormalizados.png)

#### Normalizados
![Modelo com normalização](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-dados-normalizados.png)

### Modelo conceitual
![Modelo Conceitual](https://github.com/LeandroOliveiraSouza/assets/blob/main/dspesquisa-modelo-conceitual.png)

## Padrão camadas no backend
![Avaliacoes](https://github.com/LeandroOliveiraSouza/assets/blob/main/backend-camadas.png)

# Competências:
## Back end:
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
  - repositories
  - DTO's
  - service
  - controller
    - endpoints da API REST
- Consulta paginada de vendas
  - Pageable
  - page, size, sort 
- Consultas agrupadas por gráficos
- Perfis de projeto: test, dev, prod


## Front end:
- Detalhamento e construção de cards;
- Três pilares do React
  - Componentes
  - Props
  - Estado

## Integrar back end e front end
- React Hooks
  - useState
  - useEffect
- Libs
  - React Router DOM
  - Axios
  - Apex Charts

# Tecnologias utilizadas
## Back end
- Java
- Spring Data JPA
- Spring Web
- Spring Security
- Banco de dados H2
- Banco de dados Postgres (Docker Compose)
- Maven
## Front end
- HTML / CSS / JavaScript / TypeScript
- ReactTS (React-App)
- React Router
- AXIOS

## Implantação em produção
- Back end: localhost
- Front end: localhost
- Banco de dados: H2 e Postgres (Docker Compose)

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/backend
```

## Front end web
Pré-requisitos: npm ou yarn / react

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/frontend

# executar o projeto
npm run start
```

# Agradecimentos
- DevSuperior https://devsuperior.com.br/

# Autor
Leandro de Oliveira Souza

