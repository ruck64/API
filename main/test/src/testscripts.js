'use strict';
const expect = require("chai").expect;
const logger = require("../log/logger");
var scripts = require("../../Resources/js/scripts")

module.exports = {
    matchShouldFail: function() {
            logger.info("test--> matching should fail")

            expect(scripts.matchingClass(hufflepuff,gryffindor).to.equal(false))
    }
}