let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step5.html";
})



let radios = document.querySelectorAll('input[name="pay"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        setTimeout(() => {
            document.location.href = "step7.html";
        }, 1000)
    })
})