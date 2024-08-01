# - Validação de CPF

Esse projeto é uma página HTML bem simples que ajuda a validar um número de CPF, que é um documento de identificação usado no Brasil. A página tem um formulário onde você pode digitar um CPF e um botão para fazer a validação. O HTML é complementado por um arquivo CSS para deixar a página com um visual bacana e um arquivo JavaScript para cuidar da lógica de validação.


# Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:

index.html: O arquivo HTML que define a estrutura da página. <br>
cpf.css: O arquivo CSS para estilização da página.<br>
cpf.js: O arquivo JavaScript que contém a lógica de validação do CPF.<br>

# Descrição do Código
index.html <br>
html <br>
Copiar código <br>
# *Exemplo*
  
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Validação de CPF</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='styli.css'>
</head>
<body>
    <form action="" id="cpfForm">
        <label for="">CPF:</label>
        <input type="text" id="cpf" name="cpf" maxlength="14">
        <button type="submit">VALIDAR</button>
    </form>

    <p id='message'></p>

    <script src='cpf.js'></script>
</body>
</html>

# *Explicação dos Componentes*

# Cabeçalho 
meta charset='utf-8': Define a codificação dos caracteres como UTF-8 para garantir que caracteres especiais sejam exibidos corretamente.
meta http-equiv='X-UA-Compatible' content='IE=edge': Faz com que a página seja exibida usando a versão mais recente do Internet Explorer.
title: Define o título da página que aparece na aba do navegador.
meta name='viewport' content='width=device-width, initial-scale=1': Ajusta a página para que ela fique legal em qualquer tamanho de tela.
link rel='stylesheet' type='text/css' media='screen' href='cpf.css': Conecta o arquivo CSS que vai dar o estilo para a página.

# Corpo 
<form action="" id="cpfForm">: Define um formulário com o ID cpfForm. O atributo action está vazio, indicando que o formulário não enviará dados a um servidor.
<label for="">CPF:</label>: Rótulo para o campo de entrada de CPF.
<input type="text" id="cpf" name="cpf" maxlength="14">: Campo de entrada para o CPF com um máximo de 14 caracteres (considerando a formatação como "XXX.XXX.XXX-XX").
<button type="submit">VALIDAR</button>: Botão para enviar o formulário e acionar a validação.
<p id='message'></p>: Parágrafo para exibir mensagens de validação ou erro.
<script src='cpf.js'></script>: Inclui o arquivo JavaScript que irá fornecer a lógica para validar o CPF.

# cpf.css
O arquivo cpf.css não foi incluído aqui, mas ele serve para deixar a página com um visual mais legal. Normalmente, você usaria esse CSS para definir coisas como as cores dos textos, as margens dos elementos e o formato dos campos de entrada.

# cpf.js
O arquivo cpf.js também não está aqui, mas ele é responsável por validar o CPF que você insere. Para isso, ele normalmente:

Remove qualquer caractere que não seja número.
Verifica se o comprimento do CPF está certo.
Usa um algoritmo para garantir que o CPF seja válido.
# Como Usar
Certifique-se de que todos os arquivos (index.html, cpf.css, cpf.js) estão na mesma pasta.
Abra o arquivo index.html em um navegador.
# Exemplo de Uso
Digite um CPF no campo de texto.
Clique no botão "VALIDAR".
O JavaScript vai fazer a validação e mostrar a mensagem no parágrafo logo abaixo do formulário.
Notas
Confira se o cpf.js está funcionando direitinho para validar o CPF.
Ajuste o cpf.css para deixar a página do jeito que você quer.
# Conclusão
Este projeto é uma base simples para validar um CPF usando HTML, CSS e JavaScript. Com esses três arquivos, você tem uma interface fácil de usar para validar CPFs.
