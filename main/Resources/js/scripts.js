var total, gradePoints, studentCount

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
        //count to total amount of students
        studentCount++

        const card = document.createElement('div')
        card.setAttribute('class','card')

        const h1 = document.createElement('h1')
        h1.textContent = student.name

        const p = document.createElement('p')
        p.textContent = student.house

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        
    })
 }
 if(request.status == 200)
    //issue error for 200
  
  if(request.status == 400)
    //issue error for 400
    console.log("error") //if connection fails report error
}

total = grapdePoints/studentCount

// Send request
request.send()

//function to gives to appropiate points based on the grade using a 0-4 scale
function CalculateGradePoint(letterGrade)
{
  if(student.grade === "A")
    return 4

  if(student.grade === "B")
    return 3

  if(student.grade === "C")
    return 2

  if(student.grade === "D")
    return 1
    
  if(student.grade === "E")
    return 0
}

function handleDataAndParameters(request, year, house, subject)
{
  var data,studentCount,gradePoints,totalGPA

  request.onload = function()
  {
    data = JSON.parse(this.response)

    data.forEach(student => 
      {
        if(student.year == year && student.house === house && student.subject === subject)
        {
          studentCount++
          gradePoints += CalculateGradePoint(student.grade)
        }
      })

      totalGPA = gradePoints/studentCount
  }
}