const formulario = document.getElementById('formId');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

const formData = event.target.elements.password.value;
console.log(formData);
if (formData == 'hola') {
    window.location = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';
}

else if (formData == '') {
   alert('Debe poner una contraseña');
}

});