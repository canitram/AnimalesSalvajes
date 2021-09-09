import {Leon, Lobo, Oso, Serpiente, Aguila} from './clases/Especies.js';
import especimen from './Consulta.js';

let dato = await especimen.getData();
console.log(dato);

let guardar = document.getElementById('btnRegistrar');

let sonido;
let imgSrc;

let animalesIngresados = [];
guardar.addEventListener('click', async() => {
   let nombre = document.querySelector('#animal');
   let edad = document.querySelector('#edad');
   let comentarios = document.querySelector('#comentarios');
   /* let sonido =  */
   let tipoAnimal;
   
   if(nombre && edad && comentarios){
      switch (nombre.value) {
         case 'Leon':
            tipoAnimal = new Leon(nombre,edad,imgSrc,comentarios,sonido);           
            break;
         case 'Lobo':
            tipoAnimal = new Lobo(nombre,edad,imgSrc,comentarios,sonido);            
            break;
         case 'Oso':
            tipoAnimal = new Oso(nombre,edad,imgSrc,comentarios,sonido);            
            break;
         case 'Serpiente':
            tipoAnimal = new Serpiente(nombre,edad,imgSrc,comentarios,sonido);            
            break;
         case 'Aguila':
            tipoAnimal = new Aguila(nombre,edad,imgSrc,comentarios,sonido);            
            break;
      }

      animalesIngresados.push(tipoAnimal); 
      nombre.selectedIndex = 0;
      edad.selectedIndex = 0;
      comentarios.value = ""
      preview.innerHTML = "";
      recargaTabla();
   }
  /*  else{
      alert("Debe ingresar la informacion solicitada");
   } */
});

const recargaTabla = () =>{
   let nuevaInfo = animalesIngresados[animalesIngresados.length-1];
   const tabla = document.getElementById("Animales");
   tabla.insertAdjacentHTML('beforeend', `<div class="card ml-2" style="width: 12rem; background-color: #767777">
   <img src="${nuevaInfo.getImg()}" class="card-img-top img-fluid" alt="...">
   <div class="card-body">
   <button>Play</button>
   </div>
 </div>`);
}


//cambia vista de preview segun seleccion de value #animal
document.querySelector('#animal').addEventListener('change', async(e) => {
   let seleccion = e.target.value;
   let dato = await especimen.getData();
   dato = dato.animales;
   /* console.log(dato); */
   const buscar = dato.find((a) => a.name == seleccion);
   imgSrc = `/assets/imgs/${buscar.imagen}`;
   sonido = buscar.sonido;
   let preview = document.querySelector('#preview');
   preview.style.backgroundImage = `url(${imgSrc})`;
});


