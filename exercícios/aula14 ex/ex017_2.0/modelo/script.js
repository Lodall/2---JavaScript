function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let qnt = document.getElementById('txtqnt')

    if (  num.value.length == 0){
        window.alert('Por favor digite um número!')
        
    }else {
        let n = Number(num.value)
        let c = 1
        let qnt = document.getElementById('txtqnt')
        let qntt = Number(qnt.value)
        tab.innerHTML = ''
        while (c <= qntt){
            let item = document.createElement('option')
            item.text= `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++}
         

     }}
    
