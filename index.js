document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM loaded ');

})
console.log('Before the DOM loads');

function changeText(text) {
    let id = document.getElementById('text');
    id.textContent = 'This is really cool!'
}
document.addEventListener('DOMContentLoaded', changeText);