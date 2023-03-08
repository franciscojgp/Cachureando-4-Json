function sendMail(){
    var params = {
        name: document.getElementById("nombres").value ,
        apellidos: document.getElementById("apellidos").value ,
        correo: document.getElementById("correo"). value ,
        comentario: document.getElementById("comentario"). value ,
    };

    const serviceID = "service_3rm1oxe";
const templateID = "template_4lt8vap";

emailjs
.send(serviceID, templateID, params)
.then((res) =>{
        document.getElementById("nombres").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("comentario").value = "";
        console.log(res);
        alert("Tú mensaje ha sido enviado exitosamente, gracias.");
    })

.catch((err) => console.log(err));
}

