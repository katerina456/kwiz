
let radios = document.querySelectorAll('input[name="user"]');

radios.forEach(item => {
    item.addEventListener("change", () => {
        setTimeout(() => {
            document.location.href = "pages/step2.html";
        }, 1000)
    })
})
