
function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >=0 && hora < 12){
        img.scr = 'manha.jpg'
    }else if(hora >=12 && hora <= 17){
        img.src = 'tarde.png'
    }else {
        img.src = 'noite.jpg'
    }
}