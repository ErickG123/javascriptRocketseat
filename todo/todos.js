// Referenciando os elementos HTML que sofrem alguma altereção
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Armazenando os to-do's no JavaScript
// Pega os to-do's salvos no localStorage
// JSON.parse transforma os item em um Array
// Se ele não retorna um valor razoável ele retorna um Array vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Função que renderiza os to-do's
function renderTodos() {
    // Excluindo o conteúdo da lista antes de adicionar um novo to-do
    listElement.innerHTML = '';

    // Criando um for para percorrer cada elemento do Array
    for (todo of todos) {
        // Criando os elementos para mostrar o to-do
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
   
        // Criando os elementos para excluir o to-do
        var linkElement = document.createElement('a');
        // Colocando o atributo 'href' no linkElement
        linkElement.setAttribute('href', '#');
        // Criando o texto do link
        var linkText = document.createTextNode('Excluir');
        //Juntando o texto e o link
        linkElement.appendChild(linkText);

        // Retorna a posição em que o to-do está no Array
        var pos = todos.indexOf(todo);
        // Atribuindo a função deleteTodo com o parámetro 'pos' ao link
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        // Juntado o texto e a 'li'
        todoElement.appendChild(todoText);
        // Coloca o link no final do to-do
        todoElement.appendChild(linkElement);
        // Colocando a 'li' na lista
        listElement.appendChild(todoElement);
    }
}

// Chamando a função que renderiza os to-do's
renderTodos();

// Função que adiciona um to-do
function addTodo() {
    // Recuperando o valor do 'input'
    var todoText = inputElement.value;

    // .push adiciona o elemento no final do Array
    todos.push(todoText);

    // Apagando o texto atual do 'input'
    inputElement.value = '';
    // Renderizando os to-do's com o novo elemento
    renderTodos();
    savaToStorage();
}

// Chamando a função 'addTodo' no click do botão
buttonElement.onclick = addTodo;

// Função que deleta o to-do-
// 'pos' é a posição do elemento no Array que será excluído 
function deleteTodo(pos) {
    // .splice remove uma quantidade de itens no Array baseado na posição que eu passar
    todos.splice(pos, 1);
    // Renderizando os to-do's após excluir um item
    renderTodos();
    savaToStorage();
}

// Criando uma função que salva os to-do's no localStorage
function savaToStorage() {
    // Setando o valor no Storage
    // JSON.stringify trasforma o Array em um JSON
    localStorage.setItem('list_todos', JSON.stringify(todos));
}