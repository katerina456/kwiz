let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step7.html";
})


let buttonBlack = document.querySelector('.button-black');
let radios = document.querySelectorAll('input[name="when"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        buttonBlack.disabled = false;
        setTimeout(() => {
            document.location.href = "step9.html";
        }, 1000)
    })
})

buttonBlack.addEventListener('click', () => {
    document.location.href = "step9.html";
})