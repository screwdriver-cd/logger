'use strict';

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format.combine(
        format.splat(),
        format.json()
    ),
    transports: [
        new (transports.Console)({ timestamp: true })
    ]
});

module.exports = logger;
