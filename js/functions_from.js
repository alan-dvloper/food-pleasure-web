function Dataform() {
    let username = document.getElementById('username')
    let apeuser = document.getElementById('apeuser')
    let email = document.getElementById('email')
    let  form = document.getElementById('form-suscrption')

    form.addEventListener("submit", e => {
        e.preventDefault()
        if(username.value == "" || apeuser.value == "" || email.value == "") {
           return AlertInfo()
        }else{
            AlertSuccess();
            let  btnaction = document.getElementById('btn-proc')
            console.log(btnaction.innerHTML)
            btnaction.innerHTML = "Susbscrito"
            btnaction.style.background = "#42D029"
        }
    })
}
console.log(Dataform())

function AlertInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Por favor completa todos los campos!',
      })
}

function AlertSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Exelente!!',
        text: 'Ahora recibiras notificaciones',
      })
}

function LikeEvent() {
    let icon = document.getElementById('icon_like')
    if(icon.addEventListener('click', function(){
        console.log("realizaste un click en el boton like")
        icon.style.color = '#f53a62 ';
    })) {
    }
}
LikeEvent()