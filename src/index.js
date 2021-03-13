/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo-nine.vercel.app"

const appNode = document.querySelector('#app')

appNode.addEventListener('click', event => {
  if (event.target.nodeName === 'H2') { //Si el elemento es un H2 haz esto, y funciona para todos los H2
      window.alert('hola');
    }
});

// INTL
// 1 - formato a fechas
// 2 - formato a monedas
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice
}

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
      imagen.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'

      // Crear titulo
      const title = document.createElement('h2')
      // Informacion desde la API
      title.textContent = item.name
      // Style
      // title.style = 'font-size: 2rem'
      // title.style.fontSize = '2rem'
      title.className = 'text-lg'


      // Crear precio
      const price = document.createElement('div')
      // Informacion desde la API
      price.textContent = formatPrice(item.price)
      price.className = 'text-gray-600'

      // Create price & title
      // <div class="text-center md:text-left"><price><title></div>
      const priceAndTitle = document.createElement('div')
      priceAndTitle.className = 'text-center md:text-left'
      priceAndTitle.appendChild(title)
      priceAndTitle.appendChild(price)

      // Create img & title
      // <div class="md:flex bg-white rounded-lg p-6 hover:bg-gray-300"><price><title></div>
      const card = document.createElement('div')
      card.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'
      card.appendChild(imagen)
      card.appendChild(priceAndTitle)

      allItems.push(card)
    })

    appNode.append(...allItems)
    appNode.className = 'mt-10 grid grid-cols-2 gap-2'
  })
