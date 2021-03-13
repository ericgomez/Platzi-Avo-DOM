/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo-nine.vercel.app"

const appNode = document.querySelector('#app')

// Web api
// Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  // Pocesar la resouesta y convertirla en JSON
  .then(response => response.json())
  // JSON -> Data -> Renderizar info in Browser
  .then(responseJson => {
    const allItems = []
    responseJson.data.forEach((item) => {
      // Crear imagen
      const imagen = document.createElement('img')
      // Informacion desde la API
      imagen.src = `${baseUrl}${item.image}`

      // Crear titulo
      const title = document.createElement('h2')
      // Informacion desde la API
      title.textContent = item.name

      // Crear precio
      const price = document.createElement('div')
      // Informacion desde la API
      price.textContent = item.price
      
      const container = document.createElement('div')
      container.append(imagen, title, price)

      allItems.push(container)
    })

    appNode.append(...allItems)
  })
