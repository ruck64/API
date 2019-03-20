'use strict';

/**
 * https://thisdavej.com/using-winston-a-versatile-logging-library-for-node-js/
 */

const self = this;
const logDir = '../output/test.log'

const winston = require('winston');

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: logDir })
    ]
  });

  module.exports ={
    logger: self.logger
  }