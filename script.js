// Set default color
const defaultColor = 'white'
let selectedColor = defaultColor;
toggleActiveColorClass(defaultColor);

function selectColor(color) {
    console.log(color);
    toggleActiveColorClass(selectedColor);
    toggleActiveColorClass(color);
    selectedColor = color;

}

function toggleActiveColorClass(color) {
    let id = 'select-' + color;
    let htmlElement = document.getElementById(id);
    htmlElement.classList.toggle('active-color');
}

function setBackgroundColor() {
    const body = document.getElementById('body');
    body.style.backgroundColor = selectedColor;
}

function saveSelectedColor(element) {
    element.style.backgroundColor = selectedColor;
}