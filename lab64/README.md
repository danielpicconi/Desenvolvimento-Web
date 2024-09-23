# Validação da Implementação do Servidor

Este projeto é uma demonstração de como criar um servidor em Node.js utilizando o framework Express. O servidor oferece rotas para uma página inicial, uma página "Sobre" e um tratamento de erro 404. Além disso, inclui uma funcionalidade simulada para upload de arquivos.

## Estrutura do Projeto


## Funcionalidades

- **Página Principal**: Acessível através da rota `/`.
- **Página Sobre**: Informações sobre o desenvolvedor, acessível através da rota `/about`.
- **Tratamento de Erros**: Respostas apropriadas para rotas inexistentes (erro 404).
- **Simulação de Upload**: Rota `/upload` para simular o upload de arquivos.

## Instruções de Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/danielAlquete/projeto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd projeto
    ```
3. Instale as dependências necessárias (caso tenha algum `package.json`):
    ```bash
    npm install
    ```

## Executando o Servidor

Para iniciar o servidor, execute:

    ```bash
    node server.js
    ```

Testando o Servidor com cURL

Utilize os seguintes comandos cURL para validar as funcionalidades do servidor:
1. Acessando a Página Inicial (GET /)

    ```bash
    curl http://localhost:3000/
    ```

Esperado: O servidor deve retornar o conteúdo da página index.html.
2. Acessando a Página Sobre (GET /about)

    ```bash
    curl http://localhost:3000/about
    ```

Esperado: O servidor deve retornar o conteúdo da página about.html.
3. Simulando Upload de Arquivo (POST /upload)

    ```bash
    curl -X POST http://localhost:3000/upload -d "fileData=simulacao"
    ```

Esperado: O servidor deve retornar a mensagem: "Upload simulado com sucesso!".
4. Testando Rota Inexistente (GET /rota-inexistente)

    ```bash
    curl http://localhost:3000/rota-inexistente
    ```

Esperado: O servidor deve retornar a página de erro error404.html.
5. Testando Rota Inexistente com POST (POST /rota-inexistente)

    ```bash
    ```curl -X POST http://localhost:3000/rota-inexistente
    ```

Esperado: O servidor deve retornar a página de erro error404.html.
Contribuições

Sinta-se à vontade para abrir issues ou pull requests para melhorias ou correções.
