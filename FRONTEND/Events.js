//ELEMENTOS DEL DOM 
//SELECTORES DE CLASES, ID'S, NAMES 
//'document.' = TODA LA PAGINA
// addEventListener = Para escuchar eventos que se realizan en el dom

const printMessage = () => console.log('Haz echo click en el titulo del formulario');
const registro = document.getElementById('form_register'); // Selector ID
registro.addEventListener('click', printMessage); // click es una directiva del dom



const form = document.querySelector('#formulario'); // Selector universal

const submitt = (event) => { // 'event' = Es una convencion de parametro para eventos
    event.preventDefault(); // Prevee el resultado (lo controlamos)
    console.log(
        event.target.name.value, // propiedad target para acceder a valores de formulario a traves de los names del form
        event.target.email.value,
        event.target.password.value
    );
}

form.addEventListener('submit', submitt);