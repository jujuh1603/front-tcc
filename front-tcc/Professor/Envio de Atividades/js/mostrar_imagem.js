    // Seleciona o botão e a div
    const button = document.getElementById("mostrarBtn");
    const div = document.getElementById("imagemDiv");

    // Adiciona o evento de clique ao botão
    button.addEventListener("click", function() {
        div.classList.toggle("show"); // Alterna a classe 'show' para exibir ou ocultar a div
    });