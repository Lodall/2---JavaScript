function gerar(){
    let number = document.getElementById('1-txtn1')
    let res = document.getElementById('res0')
    let selec = document.getElementById('select1')

    if (number == ''){
        res.innerHTML = ('Insira os dados corretamente.')

    } else {
        let n = Number(number.value)
        let c = 1
        let casas = document.getElementById('1-txtn2')
        let casass = Number(casas.value)
        selec.innerHTML = ''
        while (c <= casass){
            let restab = document.createElement('option')
            restab.text = `${n} x ${c} = ${n*c}`
            selec.appendChild(restab)
            c++}

    }
}

//CALCULADORA
function somar(){
    let nu1 = document.getElementById('2-txtn1')
    let nu2 = document.getElementById('2-txtn2')
    let res = document.getElementById('res1')

    n1 = Number(nu1.value)
    n2 = Number(nu2.value)

    let resultado = n1 + n2
    res.innerHTML = `A soma de ${n1} + ${n2} é ${resultado}`
}

function subtrair(){
    let nu1 = document.getElementById('2-txtn1')
    let nu2 = document.getElementById('2-txtn2')
    let res = document.getElementById('res1')

    n1 = Number(nu1.value)
    n2 = Number(nu2.value)

    let resultado = n1 - n2
    res.innerHTML = `A subtração de ${n1} - ${n2} é = ${resultado}`
}

function dividir(){
    let nu1 = document.getElementById('2-txtn1')
    let nu2 = document.getElementById('2-txtn2')
    let res = document.getElementById('res1')

    n1 = Number(nu1.value)
    n2 = Number(nu2.value)

    let resultado = n1 / n2
    res.innerHTML = `A divisão de ${n1} por ${n2} é ${resultado}`
}

function multi(){
    let nu1 = document.getElementById('2-txtn1')
    let nu2 = document.getElementById('2-txtn2')
    let res = document.getElementById('res1')

    n1 = Number(nu1.value)
    n2 = Number(nu2.value)

    let resultado = n1 * n2
    res.innerHTML = `O resultado da multiplicação de ${n1} vezes ${n2} é ${resultado}`
}

function converter1(){
    
    let num = document.getElementById("3-txt1")
    let res = document.getElementById('res2')
    let caixa1 = document.getElementById('select-medidas')
    let caixa2 = document.getElementById('caixaselect2')
    let opp = caixa1.options
    let opp2 = caixa2.options
    let mi = document.getElementById('mi')
    let cm = document.getElementById('cm')
    let metr = document.getElementById('m')
    let kilom = document.getElementById('km')
    res.innerHTML = "10"
    console.log(opp2)

    switch(opp.selectedIndex){
        case 0: 

    }
    

    /*function converter1(){
    
    let inputValue = document.getElementById("3-txt1")
    let res = document.getElementById('res2')
    let caixa1 = document.getElementById('select-medidas')
    let caixa2 = document.getElementById('caixaselect2')
    
    let optionsBoxOne = caixa1.options
    let optionsBoxTwo = caixa2.options

    let selectOptionBoxOne = optionsBoxOne.selectedIndex;
    let selectOptionBoxTwo = optionsBoxTwo.selectedIndex;

    res.innerHTML = "10"
    
    console.log(selectOptionBoxOne)
    console.log(selectOptionBoxTwo)   
}*/
}