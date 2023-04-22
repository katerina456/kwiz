let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step3.html";
})



let radios = document.querySelectorAll('input[name="where"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        setTimeout(() => {
            document.location.href = "step5.html";
        }, 1000)
    })
})