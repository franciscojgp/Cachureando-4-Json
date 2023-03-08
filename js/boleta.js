
//Para enviar boleta a correo cliente.
function sendBoleta(){
  var params = {
      name: document.getElementById("nombres").value ,
      apellidos: document.getElementById("apellidos").value ,
      dirección: document.getElementById("dirección").value ,
      ciudad: document.getElementById("ciudad").value ,
      región: document.getElementById("región").value ,
      correo: document.getElementById("correo"). value ,
  };

const serviceID = "service_3rm1oxe";
const templateID = "template_qnx66is";

emailjs
.send(serviceID, templateID, params)
.then((res) =>{
      document.getElementById("nombres").value = "";
      document.getElementById("apellidos").value = "";
      document.getElementById("dirección").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("región").value ="";
      document.getElementById("correo").value = "";
      console.log(res);
      alert("Tú boleta ha sido generada y enviada a tu correo exitosamente.");
  })

.catch((err) => console.log(err));
}

