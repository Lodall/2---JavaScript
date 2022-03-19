/*let value = [3, 5, 2 ,6 ,43, 6, 4]

for (let position=0; position < value.length; position++){
    console.log(`A posição ${position} tem valor ${value[position]}`)
}*/
let value = [ 2, 4, 90, 4, 32]
for(let pos in value){
    console.log(`O valor da posição ${pos} é ${value[pos]}`)
}
console.log(value.indexOf(4))