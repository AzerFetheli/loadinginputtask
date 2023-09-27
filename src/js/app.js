document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const loading = document.querySelector(".loading");
        let input=document.getElementById("inputElementId")
        loading.style.display = "none";
        input.style.display="block"
    }, 5000); 

});

const inputField = document.getElementById("inputElementId");
inputField.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
        inputField.value += " ";
        e.preventDefault();
    } else if (e.key === " ") {
        e.preventDefault();
        const currentValue = inputField.value;
        inputField.value = currentValue.slice(0, -1);
    }
});