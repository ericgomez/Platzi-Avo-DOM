/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo-nine.vercel.app/api/avo"

// Web api
// Conectarnos al server
window
  .fetch(url)
  // Pocesar la resouesta y convertirla en JSON
  .then(response => response.json())
  // JSON -> Data -> Renderizar info in Browser
  .then(responseJson => {
    const allItems = []
    responseJson.data.forEach((item) => {
      // Crear imagen
      const imagen = document.createElement('img')
      // Crear titulo
      const title = document.createElement('h2')
      // Crear precio
      const price = document.createElement('div')
      
      const container = document.createElement('div')
      container.append(imagen, title, price)

      allItems.push(container)
    })

    document.body.append(...allItems)
  })
