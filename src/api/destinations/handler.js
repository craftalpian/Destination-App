const ClientError = require('../../exceptions/ClientError');

class DestinationsHandler {
    constructor(service) {
        this._service = service;
    }

    async getAllDestinationsHandler(req, h) {
        try {

        } catch (error) {
            // Custom error
            if (error instanceof ClientError) {
                return h.response({
                    status: 'false',
                    code: error.statusCode,
                    data: [],
                }).code(error.statusCode);
            }

            // If server error
            return h.response({
                status: 'false',
                code: 500,
                data: [],
            }).code(500);
        }
    }
}

module.exports = DestinationsHandler;