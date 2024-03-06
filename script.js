//sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. 

let elementoCarro = document.createElement("titulo")

elementoCarro.innerText = "Carro"

elementoCarro.id = "carro-venda-js"

console.log(elementoCarro);



//produto precisa incluir pelo menos o nome, a descrição e o preço

let elementoVenda = document.createElement("div")

elementoVenda.innerHTML = 
`
<h1> Sandero </h1>

<p> Carro quase novo, pouco usado. Apenas pagar e levar. Documentação em dia. </p>

<h3> R$ 37,500 </h3>

`
console.log(elementoVenda)


/*
let elementoH1 = document.createElement("h1")

elementoH1.innerText = "Sandero"

console.log(elementoH1);

let elementoP = document.createElement("p")

elementoP.innerText = "Carro quase novo, pouco usado. Apenas pagar e levar. Documentação em dia."

console.log(elementoP);

let elementoH3 = document.createElement("h3")

elementoH3.innerText = "R$ 37,500"

console.log(elementoH3);
 
*/

// Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. 


let elementoDiv = document.createElement("div")

elementoDiv.innerHTML = `
<img scr="./imagem/sandero.png> 
`
