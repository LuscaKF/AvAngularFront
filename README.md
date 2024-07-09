# Avaliação Angular

## Descrição do Projeto

Este projeto é uma aplicação Angular desenvolvida para gerenciar perfis de pessoas. A aplicação permite listar, cadastrar, editar e excluir perfis através de uma interface web amigável.

## Tecnologias Utilizadas

- **Angular**: Framework principal utilizado para o desenvolvimento da aplicação.
- **Bootstrap**: Biblioteca de CSS para estilização da interface.
- **SweetAlert2**: Biblioteca para exibição de alertas estilizados.
- **JSON Server**: Utilizado para simular uma API RESTful para armazenamento de dados.
- **TypeScript**: Linguagem de programação usada para desenvolvimento do projeto.
- **RxJS**: Biblioteca para programação reativa, utilizada com Angular para manipulação de observables.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- src/
- ├── app/
- │ ├── components/
- │ │ ├── profile/
- │ │ │ ├── profile-list/
- │ │ │ │ ├── profile-list.component.html
- │ │ │ │ ├── profile-list.component.ts
- │ │ │ │ ├── profile-list.component.css
- │ │ │ ├── profile-create-update/
- │ │ │ │ ├── profile-create-update.component.html
- │ │ │ │ ├── profile-create-update.component.ts
- │ │ │ │ ├── profile-create-update.component.css
- │ ├── services/
- │ │ ├── profile.service.ts
- │ ├── interfaces/
- │ │ ├── person-model.ts
- │ ├── pages/
- │ │ ├── home/
- │ │ │ ├── home.component.html
- │ │ │ ├── home.component.ts
- │ │ │ ├── home.component.css
- │ │ ├── profile/
- │ │ │ ├── profile-list/
- │ │ │ │ ├── profile-list.component.html
- │ │ │ │ ├── profile-list.component.ts
- │ │ │ │ ├── profile-list.component.css
- │ │ │ ├── profile-create-update/
- │ │ │ │ ├── profile-create-update.component.html
- │ │ │ │ ├── profile-create-update.component.ts
- │ │ │ │ ├── profile-create-update.component.css
- │ ├── app-routing.module.ts
- │ ├── app.component.html
- │ ├── app.component.ts
- │ ├── app.module.ts
- ├── assets/
- ├── environments/
- ├── index.html
- ├── styles.css

## Funcionalidades

- **Listagem de Perfis**: Visualização de todos os perfis cadastrados na aplicação.
- **Cadastro de Perfis**: Adição de novos perfis com campos validados.
- **Edição de Perfis**: Edição das informações dos perfis cadastrados.
- **Exclusão de Perfis**: Exclusão de perfis com confirmação através de alertas estilizados.

## Configuração e Execução do Projeto
### Pré-requisitos

- Node.js instalado.
- Angular CLI instalado.
- JSON Server instalado.
- SweetAlert2 instalado.

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

## Instale as dependências:
```bash
npm install
```

## Configuração do JSON Server
Crie um arquivo db.json na raiz do projeto com o seguinte conteúdo:
```json
{
  "profiles": []
}
```

## Execute o JSON Server:
```bash
npx json-server --watch db.json --port 3000
```

# Execução da Aplicação
## Inicie o servidor de desenvolvimento do Angular:
```bash
ng serve
Abra o navegador e acesse http://localhost:4200.
```

## Navegação
- Home: Página inicial com informações sobre o projeto e sobre o desenvolvedor.
- Listagem de Perfis: Página para listar todos os perfis cadastrados.
- Cadastro de Perfil: Página para cadastrar novos perfis.
- Edição de Perfil: Página para editar perfis existentes.

# Exemplo em imagens:
## Página home:
![image](https://github.com/LuscaKF/AvAngularFront/assets/62342102/7d6f72e5-b79f-4df3-a996-d4c1402e6180)

## Página de perfis:
![image](https://github.com/LuscaKF/AvAngularFront/assets/62342102/f2ca7323-54bd-48ac-b5e8-863ae09d2f1b)

## Página de cadastro e edição:
![image](https://github.com/LuscaKF/AvAngularFront/assets/62342102/eaea2be9-f856-47fc-87b3-74992fd11f70)
![image](https://github.com/LuscaKF/AvAngularFront/assets/62342102/40cc611a-cd0f-42ab-9e96-ed0f1bc53e96)

