let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step4.html";
})


let buttonBlack = document.querySelector('.button-black');
let radios = document.querySelectorAll('input[name="how"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        buttonBlack.disabled = false;
        setTimeout(() => {
            document.location.href = "step6.html";
        }, 1000)
    })
})

buttonBlack.addEventListener('click', () => {
    document.location.href = "step6.html";
})