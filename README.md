# Notas Curso de JavaScript da Rocketseat 

## Variáveis:
--> var txt = txt;
- Tipagem dinâmica    
- var só é visível dentro do escopo dela
- var se adapta de acordo com oque for atribuido a ele
- String, Integer, Boolean, Float, Vetores, Objetos

--> Vetores
- Para buscar uma informação você coloca o nome do vetor e a posição daquilo que você procura
- console.log(alunos[posição]);

--> Objetos 
- Para buscar uma informação você coloca o nome do objeto.informação 
- console.log(aluno.nome);

--> Vetor e Objetos
    - var alunos = ['Erick', 'Natália'];
        var aluno = {
            nome: alunos[posição]
        };

## Operações Matemáticas:
--> +, -, *, /, %
--> +=, -=, *=, /=

## Funções:
--> function nome(parametros) {
        result = parametros;

        return result;
    }

## Condicionais:
--> if, else if, else
- == ele compara o valor das variáveis
- === ele compara o valor e o tipo das variáveis

--> switch, case, default

## Operadores Lógicos:
--> && (AND)

--> || (OR)

--> != (NOT)

## Condição Ternária:
--> ?, :

--> Se aplica quando eu faço duas verificações dentro do if
- Se ele está validando ou não uma condição 
    
--> (condição) ? return1 : return2

## Estruturas de Repetição:
--> for
- Quando você souber o tamanho do intervalo

--> while
- Quando você não sabe quantas vezes o função vai se repetir

## Intervalos e Timeout:
--> setInterval(função, intervalo);
- 1s => 1000
- Quando eu quero referenciar a função eu não uso o ()
- Se eu usar o () a função será executada
        
--> setTimeout(função, tempoDeEspera)
- A função é executado uma vez depois do tempoDeEspera

## Eventos Inline:
--> onclick
- Clica em algo

--> onmouseover
- Passa o mouse por cima de algo

## Referenciando Elementos:
--> document.getElementById('nome');
- document referencia a árvore de elementos

--> document.getElementsByTagName('input');
- Retorna um vetor, posso falar qual das TagName eu quero
- document.getElementsByTagName('input')[posição];

--> document.getElementsByClassName('input');
- Retorna um vetor
- document.getElementsByClassName('input')[posição];

--> document.querySelector('div#app input');
- Posso percorrer o corpo do HTML
- querySelector retorna apenas um elemento
    
--> document.querySelector('input[name=nome]');
- Posso buscar um elemento de acordo com seus atributos

--> document.querySelectorAll('input');
- Retorna todos os elementos

--> var btnElement = document.querySelector('elemento.classe')
- Chama um elemento de acordo com a classe
    
--> var text = inputElement.value;
- .value recuperar o valor inserido naquele elemento

## Funções Globais:
--> Console.log("Txt");
- Mostra alguma coisa no console
    
--> Alert("Txt");
- Cria uma mensagem de alerta na tela

## Criando Elementos:
-->  var nomeElement = document.createElement('tagElemento');

## Estilizando:
--> var boxElement = document.querySelector('.box');
    boxElement.style.propriedade;

## AJAX:
--> Requisição assíncrona realizada ao backend

--> Requisição sem precisar recarregar a página

--> Principal forma de consumir informações do servidor com JavaScript
- var xhr = new XMLHttpRequest();

## Promises:
--> Não influenciam na linha do tempo do código

--> Devolve um valor depois de um tempo

## Axios:
--> Biblioteca que ajuda nas requições do AJAX
