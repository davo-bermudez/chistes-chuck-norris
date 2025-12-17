const imagen = document.querySelector("#image")
const chiste = document.querySelector("#prank")
const categoria = document.querySelector("#category")
const butact = document.querySelector("#button")
const URLRAN = 'https://api.chucknorris.io/jokes/random'
const URLCAT = 'https://api.chucknorris.io/jokes/categories'


fetch('https://api.chucknorris.io/jokes/random')
.then(Response => Response.json())
.then(data => console.log(data.value))

fetch('https://api.chucknorris.io/jokes/categories')
.then(Response => Response.json())
.then(data => console.log(data))

fetch('https://api.chucknorris.io/jokes/random?category=animal')
.then(Response => Response.json())
.then(data => console.log(data))


butact.addEventListener("click", actualizar)

async function actualizar(){
    const apiran = await fetch(URLRAN)
    const data1 = await apiran.json()
    const asignarchiste = chiste.textContent = data1["value"]
    const asignarimg = imagen.src = data1["icon_url"]
    console.log(data1)
}

window.onload = actualizar()
