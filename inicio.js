var login = document.getElementById('login');
var mensaje = document.getElementById('mensaje');
var intentos = 4
login.addEventListener('submit', function(event){
event.preventDefault()
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username==="Juan"&& password==="12345"){
        mensaje.innerHTML = "Inicio de sesión correcto"
        mensaje.style.color = "blue"
        window.close()
        window.open("index.html")
    }else{
        intentos--
        if(intentos > 0){
            mensaje.innerHTML = "Inicio de sesión incorrecto"
            mensaje.style.color ="red"
        }else{
            login.style.display ="none"
            mensaje.innerHTML= "Has agotado tus intentos... Intente mas tarde"
            mensaje.style.color = "green"            
        }
    }
})