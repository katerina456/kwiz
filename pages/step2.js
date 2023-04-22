let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "../index.html";
})


let buttonBlack = document.querySelector('.button-black');

let select = document.querySelector('select');

select.addEventListener('change', () => {
    buttonBlack.disabled = select.value === '' ? true : false;
})

buttonBlack.addEventListener('click', () => {
    document.location.href = "step3.html";
})