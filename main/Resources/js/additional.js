var gradePointsTotal = 0,
    gradePointsYear1 = 0, 
    gradePointsGryffindor = 0,
    gradePointsAstronomy = 0
    studentCountTotal = 0, 
    studentCountYear1 = 0, 
    studentCountGryffindor = 0, 
    studentCountAstronomy = 0,
    totalClasses = 0,
    totalGPAAll = 0,
    totalGPAyear1 = 0,
    totalGPAGryffindor = 0,
    totalGPAAstronomy = 0,
    total = 0

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
        studentCountTotal++
        //console.log(typeof studentCountTotal)
        //console.log(student.house)
        if(matchingHouse(student.house,"Gryffindor"))
        {
          console.log("in for loop")
          studentCountGryffindor++
          var loop
          totalClasses = student.courses.length
          
          for(loop = 0; loop < totalClasses; loop++)
          {
            //console.log("calculategradepoits " + CalculateGradePoint(student.courses[loop].grade))
            gradePointsGryffindor += CalculateGradePoint(student.courses[loop].grade)
            //console.log(parseInt(gradePointsGryffindor))
          }
        }
        const card = document.createElement('div')
        card.setAttribute('class','card')

        const h1 = document.createElement('h1')
        h1.textContent = student.name
        
        const p = document.createElement('p')
        total = roundToHundreth(gradePointsGryffindor,studentCountGryffindor,totalClasses)
        p.textContent = "Gryffindor: " + total

        const year1 = document.createElement('year1')
        gradePointsYear1 = roundToHundreth(gradePointsYear1,studentCountYear1,totalClasses)
        year1.textContent = "Year 1 GPA: " + gradePointsYear1
        //console.log(studentCountGryffindor)
        //console.log(typeof total)
          //courses[position].name = course name
          //courses[position].grade = course grade
        //}

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        card.appendChild(year1)
        
    })
 }
 if(request.status == 200)
    //issue error for 200
  
  if(request.status == 400)
    //issue error for 400
    console.log("error") //if connection fails report error
}

total = gradePointsTotal/studentCountTotal

// Send request
request.send()

//function to gives to appropiate points based on the grade using a 0-4 scale
function CalculateGradePoint(letterGrade)
{
  if(letterGrade === "A")
    return 4

  if(letterGrade === "B")
    return 3

  if(letterGrade === "C")
    return 2

  if(letterGrade === "D")
    return 1
    
  if(letterGrade === "E")
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

      totalGPA = gradePoints/studentCountTotal
  }
}

function matchingHouse(studentHouse, expectedHouse)
{
  if(studentHouse === expectedHouse) 
    return true
  return false
}

function validateYear(student, year)
{
  var loop
  var len = year.length
  
  if(year[0] === ALL)
    return true;
  
  for(loop = 0; loop < len; loop++)
  {
    if(student.year === year[loop])
      return true;
  }

  return false
}

function validateSubject(student, subject)
{
  var loop 
  var len = year.length
  
  if(subject[0] == All)
    return true
  
  for(loop = 0; loop < len; loop++)
  {
    if(student.subject === subject[loop])
      return true
  }

  return false
}

function matchingClass(studentClass,expectedClass)
{
  if(studentClass === expectedClass)
    return true
  return false
}

function roundToHundreth(GPA,students, totalClasses)
{
  return Math.round(100 * GPA / (students * totalClasses)) / 100
}