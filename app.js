const app = document.getElementById("app");
let templateHtml = "";
let listaFrutas = ['😁','😂','🍎','🍇','🍎','🍍','🍓','🥝','🥝','🍇','🍌','🍍'];
let arrayCard = [];
let arrayFrutas = [];


listaFrutas.forEach(fruta =>(
    templateHtml += `
    <div class="card">
        <div class="lado frente"></div>
        <div class="lado atras">${fruta}</div>
    </div>
    `
));

app.innerHTML = templateHtml;

app.addEventListener('click',(e)=>{
    let value = e.target.classList.contains('frente')
    console.log(e.target)

    if(value){
        let elementCard = e.target.parentElement
        console.log(elementCard)
    }

})