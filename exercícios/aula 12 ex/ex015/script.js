function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 5){//Bebê
                img.setAttribute('src', 'imagens/homem-bebe-editado.png')

            } else if (idade >= 6 && idade < 12){ //criança
                img.setAttribute('src', 'imagens/homem-criança-editado.png')               

            } else if (idade >=13 && idade <= 18){ //jovem
                img.setAttribute('src', 'imagens/homem-jovem-editado.png')

            } else if (idade >= 19 && idade < 59){ //adulto
                img.setAttribute('src', 'imagens/homem-adulto-editado.png')

            } else if (idade >=60 && idade < 105){ //idoso
                img.setAttribute('src', 'imagens/homem-idoso-editado.png')

            } 
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){//Bebê
                img.setAttribute('src', 'imagens/mulher-bebe-editado.png')

            } else if (idade >= 6 && idade < 12){ //criança
                img.setAttribute('src', 'imagens/mulher-crianç-editado.png')

            } else if (idade >=13 && idade <= 18){ //jovem
                img.setAttribute('src', 'imagens/mulher-jovem-editado.png')

            } else if (idade >= 19 && idade < 59){ //adulto
                img.setAttribute('src', 'imagens/mulher-adulto-editado.png')

            } else if (idade >=60 && idade < 105){ //idoso
                img.setAttribute('src', 'imagens/mulher-idoso-editado.png')

            } 
        }
            }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
        