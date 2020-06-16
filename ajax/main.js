var xhr = new XMLHttpRequest();

// Primeiro passa o método, depois a URL
xhr.open('GET', 'https://api.github.com/users/ErickG123');
xhr.send(null);

// Chama sempre que ocorre uma modificação
xhr.onreadystatechange = function() {
    // Verifica se a informação voltou
    // 4 é a variável de quando a resposta voltou para a gente
    if(xhr.readyState === 4) {
        // O retorno da API é um JSON
        // Converte o JSON em um Array
        console.log(JSON.parse(xhr.responseText));
    }
}