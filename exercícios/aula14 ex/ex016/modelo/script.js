function verificar(){
    var finicio = document.getElementById('txtinicio')
    var ffim = document.getElementById('txtfim')
    var fpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    

    if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.length == 0){
        res.innerHTML = `Faltam dados.`
    } else { 
        res.innerHTML = 'Contando...'
        var i = Number(finicio.value)
        var f = Number(ffim.value)
        var p = Number(fpasso.value)

        if (i < f){
            for (var c = i; c <= f ; c += p){
            res.innerHTML += `${c} &#10145
        `}}
        else 
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} &#10145` 
            }
        res.innerHTML += `\u{1f3c1}`
}}

