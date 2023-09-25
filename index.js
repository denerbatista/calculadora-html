const input = document.querySelector("#display")

function digitar (valor) {
    input.value += valor
}

function limpar () {
    input.value = ""
}

function calcular () {
    try {
        let calc = eval(input.value)
        input.value = calc
    } catch (error) {
        input.value = "error"
    }
}
