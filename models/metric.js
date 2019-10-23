'use strict'

// definición de un modelo usando sequelize
const Sequelize = require('sequelize')
const SetupDataBase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = SetupDataBase(config)

  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
