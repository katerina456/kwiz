let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step7.html";
})



let radios = document.querySelectorAll('input[name="when"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        setTimeout(() => {
            document.location.href = "step9.html";
        }, 1000)
    })
})