function add(){
    let fnumber = document.getElementById('txtn')
    number = Number(fnumber.value)
    allNumbers = 0
    biggerNumber = 0
    smallestNumber = ''
    sumOfNumbers = 0
    avarage = 0
    selec = document.getElementById('selec')
    c = 0
    res = document.getElementById('res')

    if (number > 100 || number <= 0 || number == ''){
        window.alert('Invalid value, please enter a number from 1 to 100.')
    } else{
        if (number > biggerNumber){
            biggerNumber = number
        }
        if (number == ''){
            smallestNumber = number
        } else if(number < smallestNumber){
            smallestNumber = number
            
        }
        c++
        sumOfNumbers = number + sumOfNumbers
        let valueOnTheList = document.createElement('option')
        valueOnTheList.text = `Valor ${number} adicionado.`
        selec.appendChild(valueOnTheList)
    
 
}
avarage = sumOfNumbers / c
}
function finish(){
    res.innerHTML = `o menor numero é ${smallestNumber} <br> O maior é ${biggerNumber}, a soma deles é ${sumOfNumbers}`
}




