document.addEventListener('DOMContentLoaded', function() {
    const tabelaPersonagens = document.getElementById('tabelaPersonagens');

    // Dados padrão para a tabela
    const dadosPadrao = [
        { nome: "Barbie", profissao: "Médica" },
        { nome: "ken", profissao: "Advogada" },
        { nome: "Barbie 3", profissao: "Engenheira" },
        { nome: "Barbie 4", profissao: "Professora" },
        { nome: "Barbie 5", profissao: "Artista" },
        { nome: "Barbie 6", profissao: "Cientista" },
        { nome: "Barbie 7", profissao: "Atleta" },
        { nome: "Barbie 8", profissao: "Chef" },
        { nome: "Barbie 9", profissao: "Designer" },
        { nome: "Barbie 10", profissao: "Piloto" }
    ];

    // Função para adicionar linhas à tabela
    function adicionarLinha(nome, profissao) {
        const novaLinha = document.createElement('tr');
        const celulaNome = document.createElement('td');
        celulaNome.textContent = nome;
        const celulaProfissao = document.createElement('td');
        celulaProfissao.textContent = profissao;

        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaProfissao);
        tabelaPersonagens.appendChild(novaLinha);
    }

    // Adicionar dados padrão à tabela
    dadosPadrao.forEach(personagem => {
        adicionarLinha(personagem.nome, personagem.profissao);
    });

    // Adicionar evento de envio do formulário
    document.getElementById('formCadastro').addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const profissao = document.getElementById('profissao').value;

        adicionarLinha(nome, profissao);
        document.getElementById('formCadastro').reset();
    });
});