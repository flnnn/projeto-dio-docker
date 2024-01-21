let tarefas = [];
let botaoAdicionarTarefa = document.querySelector("#botaoDesc");
let listaTarefas = document.querySelector("#lista");
let descricaoTarefa;

renderizarListaTarefas();

botaoAdicionarTarefa.addEventListener("click", () => {
    descricaoTarefa = document.querySelector("#descricao");
    if (descricaoTarefa.value.length == 0) {
        alert("Insira uma tarefa!");
    } else {
        tarefas.push(descricaoTarefa.value);
        descricaoTarefa.value = "";
        renderizarListaTarefas();
    }
})

function renderizarListaTarefas() {
    if (tarefas.length == 0) {
        listaTarefas.innerHTML = "<p>Sem tarefas ainda...</p>";
    } else {
        listaTarefas.innerHTML = "";

        for (let i = 0; i < tarefas.length; i++) {
            listaTarefas.innerHTML += `<li>${tarefas[i]}<input type='button' value='-' onclick="removerTarefa(${i})"></li>`;
        }
    }
}

function removerTarefa(indice) {
    tarefas.pop(indice);
    renderizarListaTarefas();
}