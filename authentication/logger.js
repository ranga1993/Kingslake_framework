var { transports, createLogger, format } = require('winston');

module.exports = {
    //Creating the server Log file
    serverLog: createLogger({
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new transports.File({
                filename: './logs/serverLog.log',
                level: 'info'
            })
        ]
    }),
    //Creating the mySQL Connection Log file
    mysqlConnectionLog: createLogger({
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new transports.File({
                filename: './logs/mysqlConnectionLog.log'
            })
        ]
    }),
    //Creating the mySQL Error Log file
    mysqlErrorLog: createLogger({
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new transports.File({
                filename: './logs/mysqlErrorLog.log'
            })
        ]
    })
}