let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step4.html";
})



let radios = document.querySelectorAll('input[name="how"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        setTimeout(() => {
            document.location.href = "step6.html";
        }, 1000)
    })
})