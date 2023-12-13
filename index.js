const form = document.querySelector("#form");
const buttonMailTo = document.querySelector("#enviarEmail");

form.addEventListener("submit", handleSumbit);

function handleSumbit(event){
    event.preventDefault()
    const formData = new FormData(this)
    // console.log(formData.get("nombre"))
    buttonMailTo.setAttribute("href", `mailto:emailejemplo@gmail.com?subject=nombre: ${formData.get("nombre")} | correo: ${formData.get("correo")}&body=${formData.get("mensaje")}`)
    buttonMailTo.click()
}