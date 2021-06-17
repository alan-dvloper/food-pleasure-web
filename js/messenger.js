function send_messenger() {
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const messenger = document.getElementById('messenger')
    const form_action = document.getElementById('form_contact')
    form_action.addEventListener('submit', e=> {
        e.preventDefault()
        if(username.value == "" || email.value == ""  || messenger.value == "") {
            AlertInfo()
        }else{
            AlertSuccess()
        }
    })
}
send_messenger()

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
        text: 'Tu mensaje ha sido enviado con exito',
      })
}