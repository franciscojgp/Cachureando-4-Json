// Variables. Cachureando 3
// const baseDeDatos = [
//     {
//         id: 1,
//         nombre: 'Guante aseo nitrilo verde',
//         precio: 1500,
//         neto: 1260.5,
//         descripcion: "Los guantes con excelente barrera de protección biológica y química. Es de categoría premium cuyo uso se extiende al área clínica, farmacéutica, industrial y alimenticia.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto001-Guantes.jpg'
//     },
//     {
//         id: 2,
//         nombre: 'Mascarilla 3 pligues celeste',
//         precio: 2700,
//         neto: 2268.9,
//         descripcion: "Mascarilla confortable e higiénica protección respiratoria. Brinda protección contra polvos, partículas no tóxicas y olores molestos. Caja de 50 unidades.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto002-Mascarilla.webp'
//     },
//     {
//         id: 3,
//         nombre: 'Pastilla para inodoro',
//         precio: 2890,
//         neto: 2429,
//         descripcion: "Pastilla para inodoro limpia profundamente y previene el sarro. Vienen 2 unidades por envase.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto003-PastillaInodoro.jpg'
//     },
//     {
//         id: 4,
//         nombre: 'Basurero Cromado Plateado',
//         precio: 3590,
//         neto: 573,
//         descripcion: "Basurero cromado plateado, 1 unidad, con capacidad para 3 litros y pedal para abrir la tapa superior. Tiene una altura de 25cm y 17cm de ancho.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto004-BasureroMetalico.jpg'
//     },
//     {
//         id: 5,
//         nombre: 'Escobilla Limpia Sanitario',
//         precio: 7790,
//         neto: 6546,
//         descripcion: "Escobilla Limpia Sanitario Con Base De Esquina, 1 unidad, posee puntas reforzadas y fibras más resistentes.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto005-EscobillaBaño.jpg'
//     },
//     {
//         id: 6,
//         nombre: 'Sopapo Para Baños Inodoro',
//         precio: 7550,
//         neto: 6345,
//         descripcion: "Sopapo para baño clásico, marca Virutex, 1 unidad. Ideal para una mayor higiene, no retiene olores.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto006-Sopapo.jpg'
//     },
//     {
//         id: 7,
//         nombre: 'Toalla de Limpieza Multiuso',
//         precio: 3670,
//         neto: 3084,
//         descripcion: "Toalla de Limpieza Multiuso Limón, 90 Un, marca Virutex. Es de multiuso, ideal para superficies lavables, superficies de cocina, baño, escritorios.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto007-ToallaLimpieza.jpg'
//     },
//     {
//         id: 8,
//         nombre: 'Paño Multiuso',
//         precio: 3050,
//         neto: 2563,
//         descripcion: "Paño de multiuso para limpieza profunda, marca Virutex, envase de 3 unidades. Remueve fácilmente la suciedad adherida.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto008-PañoLimpieza.jpg'
//     },
//     {
//         id: 9,
//         nombre: 'Limpiador para pisos',
//         precio: 2390,
//         neto: 2008,
//         descripcion: "Limpiador Líquido Desinfectante Pisos Concentrado Botella Original, 800 ml. Mata virus y bacterias en superficies duras. Elimine los olores desagradables del hogar.",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto009-DesinfectantePiso.jpg'
//     },
//     {
//         id: 10,
//         nombre: 'Pack 2 Detergentes Líquido',
//         precio: 29590,
//         neto: 24866,
//         descripcion: "Potente detergente líquido de 3 litros. Pack de 2 unidades. Remueve manchas díficiles",
//         imagen: '/Cachureando/Cachureando Unidad 4, Json/img/Productos/Producto010-Pack2detergente.jpg'
//     },
// ];

fetch('/Cachureando/Cachureando Unidad 4, Json/tienda.json')
  .then(response => response.json())
  .then(data => {
    // aquí tienes acceso a la base de datos
    console.log(data.baseDeDatos);
    // puedes asignar la base de datos a una variable
    let baseDeDatos = data.baseDeDatos;
    // puedes utilizar la base de datos en tu código
    console.log(baseDeDatos[0].nombre);
  })
  .catch(error => console.error(error));

  
let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMneto = document.querySelector('#neto');
const DOMiva = document.querySelector('#iva');
const DOMtotal = document.querySelector('#total');
const DOMdelivery = document.querySelector('#delivery');
const DOMtotalFinal = document.querySelector('#totalFinal');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMabrirPagar = document.querySelector('#abrirPagar');
const miLocalStorage = window.localStorage;

// Funciones

// let baseDeDatos = [];

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((baseDeDatos) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-md-5');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = `${baseDeDatos.nombre}`;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', baseDeDatos.imagen);
        // Precio
        const miNodoPrecio = document.createElement('h6');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${baseDeDatos.precio}`;
        //Descripción
        const miNodoDescripcion = document.createElement('p');
        miNodoDescripcion.classList.add('card-text');
        miNodoDescripcion.textContent = `${baseDeDatos.descripcion	}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar carrito';
        miNodoBoton.setAttribute('marcador', baseDeDatos.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoDescripcion);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);

    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */

function anyadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
     // Actualizamos el LocalStorage
     guardarCarritoEnLocalStorage();
}

/**
 * Dibuja todos los productos guardados en el carrito
 */

function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'Quitar';
        miBoton.style.marginLeft = '1rem';
        miBoton.style.marginTop = '1rem';
        miBoton.style.marginBottom = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMneto.textContent = calcularNeto();
    DOMiva.textContent = calcularNeto() * 0.19.toFixed(0);
    const total = calcularNeto()*1.19.toFixed(0);
    DOMtotal.textContent = total;

    /* Calcula si corresponde cargo envío */
    if (total < 100000) {
        DOMdelivery.textContent = parseInt(total * 0.05);
    }else{
        DOMdelivery.innerHTML = `0 <i><br>Tienes envío gratuito. Felicidades!</i>`
    };
    // Calcula total a pagar
    DOMtotalFinal.textContent = parseInt(total) + parseInt(DOMdelivery.textContent);

}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
}


/**
 * Calcula el precio total NETO teniendo en cuenta los productos repetidos
 */
function calcularNeto() {
    // Recorremos el array del carrito 
    return carrito.reduce((neto, item) => {
        // De cada elemento obtenemos su precio
        const miItemNeto = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return neto + miItemNeto[0].neto;
    }, 0).toFixed(0);//agrega decimales.
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // document.querySelector('#oculto').style.display = 'none';
    // Borra LocalStorage
    localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();



// BOLETA
// Función que clona div Carrito y Resumen
function boleta() {
    // Limpiamos boleta
    document.querySelector('#comprados').textContent = '';
    document.querySelector('#resumen').textContent = '';
    // Clonamos productos en carrito
    var clon = DOMcarrito;
    var nuevo = clon.cloneNode(true);
    id = document.getElementById("comprados");
    id.appendChild(nuevo);
    // Cambiamos salto de línea entre nombre producto y código por espacio
    const salto = document.querySelectorAll ('#comprados br');
    for (let i = 0; i < salto.length; i++) {salto[i].outerHTML = `     `;}
    // Eliminamos botón quitar producto de boleta
    const bot = document.querySelectorAll('#comprados .badge');
    for (let i = 0; i < bot.length; i++) {bot[i].style.display = 'none';}
    // Clonamos resuen boleta
    var clon2 = document.querySelector('#resTotal');
    var nuevo2 = clon2.cloneNode(true);
    id2 = document.getElementById("resumen");
    id2.appendChild(nuevo2); 
}

// Lanzamos boleta y formulario al presionar PAGAR
DOMabrirPagar.addEventListener('click', boleta);

// ENVÍO CORREO

function sendMail() {
    var params = {
      nombre: document.getElementById("nombre").value,
      direccion: document.getElementById("calle").value,
      comuna: document.getElementById("comuna").value,
      region: document.getElementById("region").value,
      recibe: document.getElementById("recibe").value,
      correo: document.getElementById("correo").value,
      compra: document.getElementById("comprados").innerHTML,
      resumen: document.getElementById("resumen").innerHTML
    };
}
  
    const serviceID = ""
    const templateID = ""
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("nombre").value = '';
        document.getElementById("calle").value = '';
        document.getElementById("comuna").value = '';
        document.getElementById("region").value = '';
        document.getElementById("recibe").value = '';
        document.getElementById("correo").value = '';
          console.log(res);
          alert("¡Tu mensaje ha sido enviado exitosamente!")
  
      })
      .catch(err=>console.log(err));
  
