function add(){
    let fnumber = document.getElementById('txtn')
    number = Number(fnumber.value)
    let allNumbers = 0
    let biggerNumber = ''
    let smallestNumber = ''
    let sumOfNumbers = 0
    let avarage = 0
    let selec = document.getElementById('selec')

    if (number > 100 || number <= 0 || number == ''){
        window.alert('Invalid value, please enter a number from 1 to 100.')
    } else{
        let valueOnTheList = document.createElement('option')
        valueOnTheList.text = `Valor ${number} adicionado.`
        selec.appendChild(valueOnTheList)
    
    }

}

function finish(){

}

