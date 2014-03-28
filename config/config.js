/*!
 * Module dependencies.
 */

var path = require('path')
var rootPath = path.resolve(__dirname + '../..')

/**
 * Expose config fdf
 */

module.exports = {
  development: {
    root: rootPath,
    db: 'mongodb://localhost/thistest'
  },
  test: {
    root: rootPath,
    db: 'mongodb://localhost/"**YOUR DATABASE**"'
  },
  // },
  // staging: {
  //   root: rootPath,
  //   db: 'mongodb://heroku_app18193488:itgke13j50hrojfi876djpqrem@ds045628.mongolab.com:45628/heroku_app18193488'
  // },
  production: {
    root: rootPath,
    db: 'mongodb://heroku_app23466009:m8ajt6uvib99ftcu7n5to8pdnh@ds037047.mongolab.com:37047/heroku_app23466009'
  }
}