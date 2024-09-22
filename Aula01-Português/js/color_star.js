const cores = ["#fafc" , "#878786"];
document.getElementById("btn") = true;

trocaCor.addEventListener('click', () => {
    cor1.style.color = cores [1];
    btn = !btn;

    if(btn) cor1.style.color = cores[0];
    else cor1.style.color = cores[1];
})