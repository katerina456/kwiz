let buttonWhite = document.querySelector('.button-white');

buttonWhite.addEventListener('click', () => {
    document.location.href = "step2.html";
})



let radios = document.querySelectorAll('input[name="class"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        setTimeout(() => {
            document.location.href = "step4.html";
        }, 1000)
    })
})