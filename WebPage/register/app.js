import { Cliente } from "../../Model/Cliente.js";

const submit = document.getElementById('conteiner');

submit.addEventListener('submit', ()=>{
    console.log( 'a ver se guardo xD');
    const name = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const fechaNac = document.getElementById('fechaNac');
    const pais = document.getElementById('pais');
    const sexo = document.getElementById('sexo')

    const cliente = new Cliente(1,name,apellido,fechaNac,pais,'FechaRegistro',sexo);

    console.log(cliente.estoy());
})

console.log( 'a ver se guardo xD afuera del evento');