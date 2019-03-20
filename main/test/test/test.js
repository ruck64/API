'use strict';

var test = require('../src/testscripts')

describe('kordata API', function () {
    describe('matching given hufflepuff and gryffindor', function () {
        it('should be false', () => test.matchShouldFail())
    }),

    describe('matching given gryffindor and gryffindor', function () { 
        it('should be true', () => test.matchShouldPass())
    }),

    describe('values of grades', function() {
        it('given A it should be 4', () => test.AshouldBe4())
    }),

    describe('values of grades', function() {
        it('given F it should be 0', () => test.FshouldBe0())
    }),

    describe('GPA should be 3', function() {
        it('given 1 student taking 1 course that earns a 3 it should be 3', () => test.GPAshouldBe3())

    }),

    describe('GPA should be 2.25', function() {
        it('given 4 student taking 2 courses that earns a 18 total it should be 2.25', () => test.GPAshouldBe2_25())

    }),

    describe('Class count should be 1', function() {
        it('given theres only 1 class taken', () => test.classShouldBe1())

    }),

    describe('Class count should be 3', function() {
        it('given theres 3 classes being taken', () => test.classShouldBe3())

    })
})