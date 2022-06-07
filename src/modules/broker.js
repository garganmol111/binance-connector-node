const { validateRequiredParameters } = require('../helpers/validation')

/**
 * API broker endpoints
 * @module Broker
 * @param {*} superclass
 */
const Broker = superclass => class extends superclass { 

    /**
     * Create a Sub Account<br>
     * 
     * POST /sapi/v1/broker/subAccount<br>
     * 
     * 
     * @param {object} [options] 
     * @param {string} [options.tag] 
     * @param {number} [options.recvWindow]
     */
    subAccount(options = {}) {
        return this.signRequest(
            'POST',
            '/sapi/v1/broker/subAccount',
            options
        )
    }




    /**
   * Get Broker Info<br>
   *
   * GET /sapi/v1/broker/info<br>
   *
   * @param {object} [options]
   */
    brokerInfo(options = {}) {
        return this.signRequest(
            'GET',
            'sapi/v1/broker/info',
            options
        )
    }
}

module.exports = Broker
