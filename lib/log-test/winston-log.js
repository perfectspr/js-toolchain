'use strict';
const {createLogger, format, transports} =  require('winston');

const path = require('path');

const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.label({label: path.basename(__filename)}),
        format.colorize(),
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        format.printf(info=> {
            return `${info.timestamp} ${info.level} ${info.label}: ${info.message}`
        })),
    transports: [new transports.Console(), new transports.File({filename: 'app.log'})]
});

logger.info('hello winston');