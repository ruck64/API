var gradePointsAll = 0,
    gradePointsYear1 = 0,
    gradePointsGryffindor = 0,
    gradePointsAstronomy = 0,
    studentCountAll = 0,
    studentCountYear1 = 0,
    studentCountGryffindor = 0,
    studentCountAstronomy = 0,
    totalClassesAll = 0,
    totalClassesYear1 = 0,
    totalClassesGryffindor = 0,
    totalClassesAstronomy = 1,
    courseGrade = 0,
    loop = 0


//creating document called app to be used in my html with root styling
const app = document.getElementById('root')

//creating document and setting its class type with div styling
const container = document.createElement('div')
container.setAttribute('class', 'container')

//appending container to app
app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://challenge.kordata.io/students', true)

//running a function once i get the data
request.onload = function () {
    // User json parser for the file
    var data = JSON.parse(this.response)
    // Begin accessing JSON data here

    //validating connection status of link
    if (request.status >= 200 && request.status < 400) {
        data.forEach(student => {

            //count to total amount of students
            studentCountAll++

            //if student is year 1 increment studentYear1 count
            if (matching(student.year, 1))
                studentCountYear1++

            //if student is in the Gryffindor house increment studentCountGryffindor
            if (matching(student.house, "Gryffindor"))
                studentCountGryffindor++

            //check total amount of courses offered 
            totalClassesAll = student.courses.length

            for (loop = 0; loop < totalClassesAll; loop++) {
                courseGrade = CalculateGradePoint(student.courses[loop].grade)

                //running total of all grades of all students
                gradePointsAll += courseGrade

                //if class matches astronomy add to astronomy student and gpa variables
                if (matching(student.courses[loop].name, "Astronomy")) {
                    studentCountAstronomy++
                    gradePointsAstronomy += courseGrade
                }

                //if the course is taken by a gryffindor student add that course grade to Gryffindor GP's
                if (matching(student.house, "Gryffindor")){
                    if(totalClassesGryffindor === 0)
                        totalClassesGryffindor = countClasses(student)
                    gradePointsGryffindor += courseGrade
                }
                //if the student taking the course is a 1st year add to the first year students GP's
                if (matching(student.year, 1))
                {
                    if(totalClassesYear1 === 0)
                        totalClassesYear1 = countClasses(student)
                    gradePointsYear1 += courseGrade 
                } 

            }
            //courses[position].name = course name
            //courses[position].grade = course grade
        })
    }

    const card1 = document.createElement('div')
    card1.setAttribute('class', 'all')

    const card2 = document.createElement('div')
    card2.setAttribute('class', 'year1')

    const card3 = document.createElement('div')
    card3.setAttribute('class', 'gryffindor')

    const card4 = document.createElement('div')
    card4.setAttribute('class', 'astronomy')

    container.appendChild(card1)
    container.appendChild(card2)    
    container.appendChild(card3)
    container.appendChild(card4)

    console.log("gpa: " + gradePointsYear1)
    console.log("students: " + studentCountYear1)
    console.log("classes: " + totalClassesYear1)

    const all = document.createElement('h1')
    all.textContent = "GPA of all students"
    card1.appendChild(all)

    const allGPA = document.createElement('p')
    allGPA.textContent = "GPA: " + roundToHundreth(gradePointsAll,studentCountAll,totalClassesAll)
    card1.appendChild(allGPA)
    
    const year1 = document.createElement('h1')
    year1.textContent = "GPA of all First years"
    card2.appendChild(year1)
    
    const year1GPA = document.createElement('p')
    year1GPA.textContent = "GPA: " + roundToHundreth(gradePointsYear1,studentCountYear1,totalClassesYear1)
    card2.appendChild(year1GPA)

    const gryffindor = document.createElement('h1')
    gryffindor.textContent = "GPA for the entire Gryffindor House"
    card3.appendChild(gryffindor)
   
    const gryffindorGPA = document.createElement('p')
    gryffindorGPA.textContent = "GPA: " + roundToHundreth(gradePointsGryffindor,studentCountGryffindor,totalClassesGryffindor)
    card3.appendChild(gryffindorGPA)
   
    const astronomy = document.createElement('h1')
    astronomy.textContent = "GPA for all students taking Astronomy"
    card4.appendChild(astronomy)

    const astronomyGPA = document.createElement('p')
    astronomyGPA.textContent = "GPA: " + roundToHundreth(gradePointsAstronomy,studentCountAstronomy,totalClassesAstronomy)
    card4.appendChild(astronomyGPA)

}



    total = gradePointsAll / studentCountAll

    // Send request
    request.send()

    //function to gives to appropiate points based on the grade using a 0-4 scale
    function CalculateGradePoint(letterGrade) {
        if (letterGrade === "A")
            return 4

        if (letterGrade === "B")
            return 3

        if (letterGrade === "C")
            return 2

        if (letterGrade === "D")
            return 1

        if (letterGrade === "E")
            return 0
    }

    function matching(actual, expected) {
        if (actual === expected)
            return true
        return false
    }

    function roundToHundreth(GPA, students, totalClasses) {
        return Math.round(100 * GPA / (students * totalClasses)) / 100
    }

    function countClasses(student)
    {
        var count = 0,
            loop = 0
            len = student.courses.length
        for(loop = 0;loop < len; loop++)
            count++
        return count
    }