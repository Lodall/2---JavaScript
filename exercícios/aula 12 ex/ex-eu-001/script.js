function verify(){
    var date = new Date()
    var year = date.getFullYear()
    var res = document.getElementById('res')
    var fyear = window.document.getElementById('txtyear').value
    var fage = year - Number(fyear.value).value

    if(fyear.value == 0 || Number(fyear.value) > year){
        window.alert('[ERRO] - Verifique os dados e tente novamente.')}
        else {
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        var gen = ''
        var letra = ''
        img.setAttribute('id', 'foto')}
            if(fsex[0].checked){
                var gen = "Male"   
                var letra = 'O'         
                var fsex = window.document.getElementsByName('radsex').value
                var fname = window.document.getElementById('txtname').value
                var fyear = window.document.getElementById('txtyear').value
                var fage = year - Number(fyear.value).value
                var femail = window.document.getElementById('txtemail').value
                var fphonenumber = window.document.getElementById('txttel').value
                var fjob = window.document.getElementById('txtjob').value
                var img = window.document.createElement('img')
                img.setAttribute('id', 'foto')}
                else if(fsex[1].checked){
                    var gen = "Female"  
                    var letra = "A"          
                    var fsex = window.document.getElementsByName('radsex').value
                    var fname = window.document.getElementById('txtname').value
                    var fyear = window.document.getElementById('txtyear').value
                    var fage = year - Number(fyear.value).value
                    var femail = window.document.getElementById('txtemail').value
                    var fphonenumber = window.document.getElementById('txttel').value
                    var fjob = window.document.getElementById('txtjob').value
                    var img = window.document.createElement('img')
                    img.setAttribute('id', 'foto')}
                else if(fsex[2].checked){
                    var gen = "Another" 
                    var letra = "X"           
                    var fsex = window.document.getElementsByName('radsex').value
                    var fname = window.document.getElementById('txtname').value
                    var fyear = window.document.getElementById('txtyear').value
                    var fage = year - Number(fyear.value).value
                    var femail = window.document.getElementById('txtemail').value
                    var fphonenumber = window.document.getElementById('txttel').value
                    var fjob = window.document.getElementById('txtjob').value
                    var img = window.document.createElement('img')
                    img.setAttribute('id', 'foto')}
        
    

    res.innerHTML = `[USUÁRI${letra} CADASTRAD${letra}] <br> Name: ${fname}<br> Sex: ${gen} <br> Age: ${fage} <br> Email: ${femail} <br> Phone number: ${fphonenumber} <br> Profession: ${fjob}`


                }
