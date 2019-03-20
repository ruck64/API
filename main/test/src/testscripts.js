'use strict';
const expect = require("chai").expect
var scripts = require("../../Resources/js/functions.js")

module.exports = {
    matchShouldFail: function() {
        expect(scripts.matching("hufflepuff","gryffindor")).to.be.false
    },

    matchShouldPass: function() {
        expect(scripts.matching("gryffindor","gryffindor")).to.be.true
    },
    
    AshouldBe4: function() {
        expect(scripts.calculateGradePoint("A")).to.equal(4)
    },

    FshouldBe0: function() {
        expect(scripts.calculateGradePoint("F")).to.equal(0)
    },

    GPAshouldBe3: function() {
        expect(scripts.roundToHundreth(3,1,1)).to.equal(3)
    },

    GPAshouldBe2_25: function() {
        expect(scripts.roundToHundreth(18,4,2)).to.equal(2.25)
    },

    classShouldBe1: function() {
        var student = ["gym"]
        expect(scripts.countClasses(student)).to.equal(1)
    },

    classShouldBe3: function() {
        var student = ["gym", "english", "potions"]
        expect(scripts.countClasses(student)).to.equal(3)
    }
};