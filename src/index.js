const button = document.querySelectorAll('.btn')
const calcular = document.getElementById('calc')
const result = document.getElementById('result')
const change = document.querySelectorAll('.change')
const resto = document.getElementById('%')
const divisao = document.getElementById('/')
const mult = document.getElementById('x')
const sub = document.getElementById('-')
const adicao = document.getElementById('+')


let soma1 = []
let soma2 = []
let sumActive = true
let operator = ''
let results = 0

function resultUpdate() {
    if (sumActive && results === 0) {
        result.innerHTML = `<span>${soma1.join('')}</span>`
    } else if (!sumActive && results === 0) {
        result.innerHTML = `<span>${soma1.join('')} ${operator} ${soma2.join('')}</span>`
    } else if (results !== 0) {
        result.innerHTML = `<span>${results} ${operator} ${soma2.join('')}</span>`
    }
}

button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (sumActive) {
            soma1.push(btn.textContent)
        } else {
            soma2.push(btn.textContent)
        }
        resultUpdate()
    })
})

change.forEach(btn => {
    btn.addEventListener('click', () => {
        sumActive = false
        operator = btn.textContent.trim()
        resultUpdate()
    })
})

calcular.addEventListener('click', () => {
    if (results === 0) {
        const num1 = Number(soma1.join(''))
        const num2 = Number(soma2.join(''))

        switch (operator) {
            case '%':
                results = num1 % num2
                break
            case '/':
                results = num1 / num2
                break
            case 'x':
                results = num1 * num2
                break
            case '-':
                results = num1 - num2
                break
            case '+':
                results = num1 + num2
                break
        }
        soma1 = results
        soma2 = []
        console.log('lista 1:', soma1, 'lista 2:', soma2)
        result.innerHTML = `<span>${results}</span>`
    } else {
        const num2 = Number(soma2.join(''))
    
        switch (operator) {
            case '%':
                results = results % num2
                break
            case '/':
                results = results / num2
                break
            case 'x':
                results = results * num2
                break
            case '-':
                results = results - num2
                break
            case '+':
                results = results + num2
                break
        }
        soma2 = []
        result.innerHTML = `<span>${results}</span>`
    }
})