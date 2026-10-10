function salvarFormulario() {
    localStorage.setItem("form", JSON.stringify(formStorage))
}

function mascaraTelefone(input) {
    let valor = input.value;

    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

    input.value = valor;
}

function mascaraCPF(input) {
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    input.value = valor;
}

function mascaraCep(input) {
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 8) {
        valor = valor.slice(0, 7);
    }

    valor = valor.replace(/^(\d{5})(\d)/g, "$1 - $2");

    input.value = valor;
}


function iniciarFormulario() {
    let formStorage;

    if (localStorage.getItem("form")) {
        formStorage = JSON.parse(localStorage.getItem("form"));
    } else {
        formStorage = {
            nome: "",
            cpf: "",
            nascimento: "",
            email: "",
            cep: "",
            telefone: "",
            cidade: "",
            estado: "",
        };
    }

    const telefoneInput = document.getElementById('telefone');
    telefoneInput.value = formStorage.telefone;
    telefoneInput.addEventListener('input', function () {
        mascaraTelefone(this);
        this.setCustomValidity("")
        formStorage.telefone = this.value;
        salvarFormulario();
    });
    telefoneInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, digite um telefone válido.');
    });


    const cpfInput = document.getElementById('cpf');
    cpfInput.value = formStorage.cpf;
    cpfInput.addEventListener('input', function () {
        mascaraCPF(this);
        this.setCustomValidity("")
        formStorage.cpf = this.value;
        salvarFormulario();
    });
    cpfInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, digite um CPF válido')
    })

    const cepInput = document.getElementById('cep');
    cepInput.value = formStorage.cep;
    cepInput.addEventListener('input', function () {
        mascaraCep(this);
        this.setCustomValidity("")
        formStorage.cep = this.value;
        salvarFormulario();
    });
    cepInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, digite um CEP valido.')
    });

    const nomeInput = document.getElementById('nome');
    nomeInput.value = formStorage.nome;
    nomeInput.addEventListener('input', function () {
        this.setCustomValidity("")
        formStorage.nome = this.value;
        salvarFormulario();
    })
    nomeInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, digite um nome válido.')
    });

    const nascimentoInput = document.getElementById('nascimento');
    nascimentoInput.value = formStorage.nascimento;
    nascimentoInput.addEventListener('input', function () {
        this.setCustomValidity("");
        formStorage.nascimento = this.value;
        salvarFormulario();
    })
    nascimentoInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, selecione uma data.')

    });

    const emailInput = document.getElementById('email');
    emailInput.value = formStorage.email;
    emailInput.addEventListener('input', function () {
        this.setCustomValidity("")
        formStorage.email = this.value;
        salvarFormulario();
    })
    emailInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, digite um e-mail válido.')
    });

    const cidadeInput = document.getElementById('cidade');
    cidadeInput.value = formStorage.cidade;
    cidadeInput.addEventListener('input', function () {
        this.setCustomValidity("")
        formStorage.cidade = this.value;
        salvarFormulario();
    })
    cidadeInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, digite uma cidade')
    });

    const estadoInput = document.getElementById('estado');
    estadoInput.value = formStorage.estado;
    estadoInput.addEventListener('input', function () {
        this.setCustomValidity("")
        formStorage.estado = this.value;
        salvarFormulario();
    })
    estadoInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, selecione um estado.')
    });

    const areaInput = document.getElementById('area-interesse');
    areaInput.addEventListener('input', function () {
        this.setCustomValidity("")
    })
    areaInput.addEventListener('invalid', function () {
        this.setCustomValidity('Por favor, selecione uma área de interesse.')
    });
}