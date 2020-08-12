const form= document.querySelector("#info1")
const email= document.querySelector("#email")
const emailHelp= document.querySelector("#emailHelp")
const nombre= document.querySelector("#nombre")
const nombreHelp= document.querySelector("#nombreHelp")
const mensaje= document.querySelector("#mensaje")
const mensajeHelp= document.querySelector("#mensajeHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value != "" && nombre.value != "" && mensaje.value != "") {
		form.submit()
	} else {
		if (email.value === "") {
			emailHelp.innerText = "Por favor, completar email."
		}
		if (nombre.value === "") {
			nombreHelp.innerText = "Por favor, completar nombre."
		}
		if (mensaje.value === "") {
			mensajeHelp.innerText = "Por favor, escribir mensaje."
		}
	}
})





