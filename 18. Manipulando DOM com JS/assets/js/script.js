function changeMode(){
    changeClasses();
    changeText()
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode+" ON"
        return;
    }
    button.innerHTML = darkMode
    h1.innerHTML = lightMode+" ON"
}


const darkModeClass = 'dark-mode'
//Selector Button
const button = document.getElementById('mode-selector')
//Selector H1
const h1 = document.getElementById('page-title')
//Selector Footer
const footer = document.getElementsByTagName('footer')[0];
//Selector Body
const body = document.getElementsByTagName('body')[0]; // seleciona pela tagName

button.addEventListener('click',changeMode)

