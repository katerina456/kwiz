let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "../index.html";
})


let buttonBlack = document.querySelector('.button-black');

let select = document.querySelector('select');

buttonBlack.addEventListener('click', () => {
    if (select.value !== '') {
        document.location.href = "step3.html";
    }
    
})