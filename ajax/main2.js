var minhaPromise = function() {
    // Resolve é usado quando o resultado é um sucesso
    // Reject é usando quando o resultado não é um sucesso
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/ErickG123');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                // Verifica se a chamada foi um sucesso
                // 200 é o status de sucesso
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

// Exibindo o resultado que a promise retornou
minhaPromise()
    // .then é executado quando chama o resolve na promise
    // Sucesso
    .then(function(response) {
        console.log(response);
    })
    // .catch é executado quando chama o reject na promise
    // Error
    .catch(function(error) {
        console.warn(error);
    });