let contas = [];

const btn = document.getElementById("btnCriar");
const input = document.getElementById("nomeConta");
const lista = document.getElementById("listaContas");
const titulo = document.getElementById("tituloConta");

btn.addEventListener("click", criarConta);

function criarConta() {
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite o nome da conta!");
        return;
    }

    contas.push(nome);
    input.value = "";

    atualizarLista();
}

function atualizarLista() {
    lista.innerHTML = "";

    contas.forEach(conta => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = conta;

        span.addEventListener("click", () => {
            titulo.innerText = "Checklist da conta: " + conta;
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        lista.appendChild(li);
    });
}
