const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://challenge.kordata.io/students', true)

request.onload = function ()
{
// User json parser for the file
    var data = JSON.parse(this.response)
  // Begin accessing JSON data here

  if (request.status >= 200 && request.status < 400)
  {
    data.forEach(student => 
    {
        const card = document.createElement('div')
        card.setAttribute('class','card')

        const h1 = document.createElement('h1')
        h1.textContent = student.name

        const p = document.createElement('p')
        p.textContent = student.house
        console.log(student.house)

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        
    })
 }
 else 
    console.log("error")
}

// Send request
request.send()