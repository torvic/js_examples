let select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', setWeather);
console.log(select.value);
function setWeather() {
    const choice = select.value;
    /*             console.log(choice); */
    switch (choice) {
        case 'soleado':
            para.textContent = 'Esta soleando'
            break;

        case 'lluvioso':
            para.textContent = 'Esta lluviendo'
            break;

        case 'nevando':
            para.textContent = 'Esta nevando'
            break;

        case 'nublado':
            para.textContent = 'Esta nublado'
            break;

        default:
            para.textContent = ''
            break;
    }
}



