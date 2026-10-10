function carregarProjetos() {

    const projetos = [
        {
            titulo: "Educação para o Futuro",
            texto: "Oferecemos reforço escolar, oficinas de letramento digital e capacitação profissional básica para crianças, jovens e adultos em situação de vulnerabilidade, abrindo portas para o mercado de trabalho."
        },
        {
            titulo: "Apoio Alimentar e Nutricional",
            texto: "Arrecadamos e distribuímos cestas básicas e mantimentos essenciais para famílias cadastradas, além de promover oficinas de aproveitamento integral de alimentos para combater o desperdício."
        },
        {
            titulo: "Desenvolvimento Comunitário",
            texto: "Realizamos mutirões de melhoria urbana, rodas de conversa sobre saúde preventiva e suporte psicológico acessível para fortalecer os laços de vizinhança e cidadania."
        },
        {
            titulo: "Campanhas de Doação",
            texto: "Apoiar a nossa causa é um ato simples, flexível e totalmente transparente. Você pode contribuir de diferentes maneiras:",
            lista: [
                {
                    titulo: "Doação Financeira",
                    texto: "Contribuições pontuais ou mensais via PIX e transferência bancária que ajudam a manter a infraestrutura dos nossos projetos ativos."
                },
                {
                    titulo: "Doação de Mantimentos e Insumos",
                    texto: "Arrecadação contínua de alimentos não perecíveis, roupas em bom estado, livros educativos e materiais de higiene pessoal."
                },
                {
                    titulo: "Prestação de Contas",
                    texto: "Publicamos mensalmente relatórios detalhados sobre o destino de cada recurso arrecadado, garantindo total clareza com os nossos colaboradores."
                },
            ]
        },
        {
            titulo: "Atividades de Voluntariado",
            texto: "O coração da nossa ONG pulsa graças à dedicação de quem doa seu tempo e talento. Ser voluntário é assumir um papel ativo na transformação social.",
            lista: [
                {
                    titulo: "Perfil do Voluntário",
                    texto: "Buscamos pessoas proativas, empáticas e comprometidas com a causa social, independentemente da área de formação profissional."
                },
                {
                    titulo: "Onde Atuar",
                    texto: "Os voluntários podem atuar diretamente nas aulas de reforço, na logística de separação de mantimentos, na organização de eventos beneficentes ou no apoio administrativo e de comunicação."
                },
                {
                    titulo: "Impacto Direto",
                    texto: "Cada hora dedicada por um colaborador se traduz em acolhimento, aprendizado e novas oportunidades para centenas de famílias assistidas."
                }

            ]
        }
    ]

    const frentesAtuacao = document.getElementById("frentes-atuacao");
    for (const projeto of projetos) {
        let ul = "";
        if (projeto.lista) {
            for (const item of projeto.lista) {
                ul += `<li><strong>${item.titulo}:</strong> ${item.texto}</li> `
            }
        }

        frentesAtuacao.innerHTML += `
    <div data-aos="fade-up">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.texto}</p>
        <ul>${ul}</ul>
    </div>
    `
    }
};