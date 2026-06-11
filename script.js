function scrollToSection(id){
document.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});
}

const video = document.getElementById("meuVideo");

video.addEventListener("ended", () => {
document
.getElementById("videoFinal")
.classList.remove("hidden");
});

const btn = document.getElementById("surpresaBtn");

btn.addEventListener("click", () => {
document
.getElementById("surpresa")
.classList.remove("hidden");
});

function atualizar(id, dataInicio){

const agora = new Date();

const diff = agora - dataInicio;

const dias =
Math.floor(diff/(1000*60*60*24));

const horas =
Math.floor(diff/(1000*60*60))%24;

const minutos =
Math.floor(diff/(1000*60))%60;

document.getElementById(id).innerHTML =
`${dias} dias, ${horas} horas e ${minutos} minutos`;
}

function atualizarTodos(){

atualizar(
"date1",
new Date("2024-12-07T17:30:00")
);

atualizar(
"date2",
new Date("2025-03-01T00:00:00")
);

atualizar(
"date3",
new Date("2025-09-13T16:30:00")
);

}

setInterval(atualizarTodos,1000);

atualizarTodos();