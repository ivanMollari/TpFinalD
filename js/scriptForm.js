const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpButtonMov = document.getElementById('signUpMov');
const signInButtonMov = document.getElementById('signInMov');
const container = document.getElementById('container');

const formulario = document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');
const expresiones = {
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, 
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	peso: /^[0-9]{2,3}$/
}

const validarFormulario = (e) => {
	switch(e.target.name){
		case "name":
			validarCampo(expresiones.name,e.target,'name');
		break;
		case "email":
			validarCampo(expresiones.mail,e.target,'mail');
		break;
		case "emailR":
			validarCampo(expresiones.mail,e.target,'mailR');
		break;
		case "password":
			validarCampo(expresiones.password,e.target,'password');
		break;
		case "password1":
			validarCampo(expresiones.password,e.target,'password1');
		break;
		case "password2":
			validarPassword2();
		break;
		case "peso1":
			validarCampo(expresiones.peso,e.target,'peso');
		break;
		case "peso2":
			validarCampo(expresiones.peso,e.target,'peso');
		break;
	}
}

const validarCampo = (expresion,input,campo) =>{
	if(expresion.test(input.value)){
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} .iconoError`).classList.add('fa-check-circle');
		document.querySelector(`#grupo-${campo} .iconoError`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
	}else{
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} .iconoError`).classList.add('fa-times-circle');
		document.querySelector(`#grupo-${campo} .iconoError`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password1');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById('grupo-password2').classList.add('formulario-grupo-incorrecto');
		document.getElementById('grupo-password2').classList.remove('formulario-grupo-correcto');
		//document.querySelector('#icono-error').classList.add('fa-times-circle');
		//document.querySelector('#icono-error').classList.remove('fa-check-circle');
		document.querySelector(`#grupo-password2 .formulario-input-error`).classList.add('formulario-input-error-activo');
	}else{
		document.getElementById('grupo-password2').classList.remove('formulario-grupo-incorrecto');
		document.getElementById('grupo-password2').classList.add('formulario-grupo-correcto');
		//document.querySelector('#icono-error').classList.remove('fa-times-circle');
		//document.querySelector('#icono-error').classList.add('fa-check-circle');
		document.querySelector('#grupo-password2 .formulario-input-error').classList.remove('formulario-input-error-activo');
	}
}

inputs.forEach((input) =>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
	e.preventDefault();
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpButtonMov.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	container.classList.add("up-panel-active");
});

signInButtonMov.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	container.classList.remove("up-panel-active");
});