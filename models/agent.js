'use strict'

// definición de un modelo usando sequelize
const Sequelize = require('sequelize')
const SetupDataBase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequelize = SetupDataBase(config)

  return sequelize.define('agent', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    hostname: {
      type: sequelize.STRING,
      allowNull: false
    },

    pid: {
      type: sequelize.STRING,
      allowNull: false
    },

    connected: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
