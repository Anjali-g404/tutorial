const getFirstNames = list => {
  return list.map(eachPerson => eachPerson.firstName)
}

module.exports = getFirstNames
const Names = require('../../country/state/city/index.js')
const getPeopleInCity = require('../../names/index.js')
console.log(getPeopleInCity(Names))
