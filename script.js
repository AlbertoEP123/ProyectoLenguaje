//Cambiar tipo de letra
function cambiarTipografia() {
    var select = document.getElementById("tipografia");
    var tipografiaSeleccionada = select.value;
    
    // Guardar la tipografía seleccionada en localStorage
    localStorage.setItem("tipografia", tipografiaSeleccionada);
    
    // Aplicar la tipografía a todo el documento
    document.body.style.fontFamily = tipografiaSeleccionada;
  }
  //Esta funcion la hace inmediata, no es llamada. 
  //Lo que hace es aplicarlo al resto de paginas html
  (function() {
    try{
      var tipografiaGuardada = localStorage.getItem("tipografia");
      if (tipografiaGuardada) {
        document.body.style.fontFamily = tipografiaGuardada;
        document.getElementById("tipografia").value = tipografiaGuardada;
      }
    }catch(ex){

    }
    
  })();
  

  function centrarTexto() {
    
    var centrar = document.body.style.textAlign;
    
    if (centrar === 'center') {
        document.body.style.textAlign = 'left';
        document.getElementById('cambiartext').textContent = 'Al Centro';
        
    } else {
        document.body.style.textAlign = 'center';
        document.getElementById('cambiartext').textContent = 'La Izquierda';
        
    }
    localStorage.setItem('alineado', document.body.style.textAlign);
  
}
//Guardar alineado
try {
  var alineadoGuardado = localStorage.getItem('alineado');
if (alineadoGuardado) {
    document.body.style.textAlign = alineadoGuardado;
    if (alineadoGuardado === 'center') {
        document.getElementById('cambiartext').textContent = 'La izquierda';
    } else {
        document.getElementById('cambiartext').textContent = 'Derecha';
    }
}
} catch (exx) {
  
}

// Guardar nombre
function guardarNombre() {
  var nameInput = document.getElementById('nameInput');
  var saludar = document.getElementById('nombreGuardado');

  // Guardar el nombre en localStorage
  sessionStorage.setItem('name', nameInput.value);

  // Mostrar el nombre guardado
  saludar.textContent = 'Usuario: ' + nameInput.value;
}

// Cargar el nombre almacenado al cargar la página
window.onload = function() {
  var nombre = sessionStorage.getItem('name');
  var saludar = document.getElementById('nombreGuardado');

  if (nombre) {
    saludar.textContent = 'Usuario: ' + nombre;
  }else{
    saludar.textContent = 'Sin identificar';
  }
};

// Borrar nombre
function borrarNombre() {
  sessionStorage.removeItem('name');
  var saludar = document.getElementById('nombreGuardado');
  var nameInput = document.getElementById('nameInput');
  nameInput.value = '';
  saludar.textContent = '';
}



//modal
const openModalButton = document.getElementById('abrirModal');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');

openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

var audio = document.getElementById("backgroundMusic");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var volumeSlider = document.getElementById("volumeSlider");
var volume = localStorage.getItem("volume");

// Restaurar el volumen guardado
if (volume) {
  audio.volume = volume;
  volumeSlider.value = volume;
}

playButton.addEventListener("click", function() {
  audio.play();
});

pauseButton.addEventListener("click", function() {
  audio.pause();
});

volumeSlider.addEventListener("input", function() {
  var volumeValue = volumeSlider.value;
  audio.volume = volumeValue;
  localStorage.setItem("volume", volumeValue);
});



