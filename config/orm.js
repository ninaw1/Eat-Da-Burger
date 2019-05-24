// Our O.R.M file where we write our functions that take inputs and conditions for our app 
// turns commands into database commands like SQL 

const connection = require('./connection.js')

// this function loops through and pushes a question mark to our array 
function printQuestionMarks(num) {
    const arr = []

    for (let i = 0; i < num; i++) {
        arr.push('?')
    }
    return arr.toString()
}

// this function writes our commants to sql 
function objToSql(ob) {
    const arr = []

    for(var key in ob) {
        arr.push(key + '=' + ob[key])
    }
    return arr.toString()
}

const orm = {
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';'
        connection.query(queryString, function(e, result) {
            if (e) {
                throw e 
            }
            cb(result)
        })
    }
    // vals is in array of value that we want to save to 
}