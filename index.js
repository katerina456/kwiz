let buttonBlack = document.querySelector('.button-black');
let radios = document.querySelectorAll('input[name="user"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        buttonBlack.disabled = false;
        setTimeout(() => {
            document.location.href = "pages/step2.html";
        }, 1000)
    })
})

buttonBlack.addEventListener('click', () => {
    document.location.href = "pages/step2.html";
})
