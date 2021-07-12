const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpButtonMov = document.getElementById('signUpMov');
const signInButtonMov = document.getElementById('signInMov');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpButtonMov.addEventListener('click', () => {
	container.classList.add("up-panel-active");
});

signInButtonMov.addEventListener('click', () => {
	container.classList.remove("up-panel-active");
});