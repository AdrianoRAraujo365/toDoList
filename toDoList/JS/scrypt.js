const inputTarefa = document.getElementById("novaTarefa");
    const botaoAdicionar = document.getElementById("btnAdicionar");
    const listaTarefas = document.getElementById("listaTarefas");

    // Função para adicionar tarefa
    botaoAdicionar.addEventListener("click", function() {
      const textoTarefa = inputTarefa.value.trim();

      if (textoTarefa === "") return;

      const li = document.createElement("li");
      li.textContent = textoTarefa;

      // Alternar conclusão ao clicar
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // Botão de deletar
      const btnExcluir = document.createElement("button");
      btnExcluir.textContent = "✖";
      btnExcluir.classList.add("btn-delete");
      btnExcluir.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita marcar como concluída ao apagar
        li.remove();
      });

      li.appendChild(btnExcluir);
      listaTarefas.appendChild(li);

      inputTarefa.value = "";
    });

    // Adicionar com tecla Enter
    inputTarefa.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        botaoAdicionar.click();
      }
    });