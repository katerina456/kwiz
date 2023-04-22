let form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    let data = new FormData(form);
    let url = 'https://reqres.in/api/users';
    let metod = 'POST'

    fetch(url, {
        method: metod,
        body: data
    })
    .then(function(response) {
        console.log(response.status );   
    })    

    setPopUp();

    setTimeout(() => {  
        removePopUp();
    }, 4000);

    clearForm(form);

    setTimeout(() => {  
        document.location.href = "../index.html";
    }, 5000);
})


function clearForm(form) {
    let inputs = form.querySelectorAll('.input');

    inputs.forEach(input => {
        input.value = '';
    })
}

function setPopUp() {
    document.querySelector('.answer').classList.add('visible');
    setOverlay();
}

function removePopUp() {
    document.querySelector('.answer').classList.remove('visible');
    removeOverlay();
}

function setOverlay() {
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let body = document.querySelector('body');
    body.appendChild(overlay);
}

function removeOverlay() {
    let body = document.querySelector('body');
    let overlay = document.querySelector('.overlay');
    body.removeChild(overlay);
}