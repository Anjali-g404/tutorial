const getFirstNames = require('../utilities/utils')

const getPeopleInCity = peopleNames => {
  return getFirstNames(peopleNames)
}

module.exports = getPeopleInCity
