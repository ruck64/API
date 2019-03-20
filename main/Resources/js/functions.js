module.exports = {

    calculateGradePoint: function (letterGrade) {
        if (letterGrade === "A")
            return 4

        if (letterGrade === "B")
            return 3

        if (letterGrade === "C")
            return 2

        if (letterGrade === "D")
            return 1

        if (letterGrade === "F")
            return 0
    },

    //checks if two values are the same
    matching: function (actual, expected) {
        if (actual === expected)
            return true
        return false
    },

    //calculates a GPA value to the nearest hundreth depeding
    //on amount of students and classes and each students grade from that class
    roundToHundreth: function (GPA, students, totalClasses) {
        return Math.round(100 * GPA / (students * totalClasses)) / 100
    },

    //counts the amount of classes a student is taking
    countClasses: function (student) {
        return student.length
    }
};