const ClientError = require('../../exceptions/ClientError');

class DestinationsHandler {
    constructor(service) {
        this._service = service;

        this.getAllDestinationsHandler = this.getAllDestinationsHandler.bind(this);
        this.getSpecificDestinationHandler = this.getSpecificDestinationHandler.bind(this);
        this.putSpecificDestinationHandler = this.putSpecificDestinationHandler.bind(this);
        this.postDestinationHandler = this.postDestinationHandler.bind(this);
        this.deleteDestinationHandler = this.deleteDestinationHandler.bind(this);
    }

    async getAllDestinationsHandler(req, h) {
        try {
            const data = await this._service.getAllDestinationsService();

            return h.response({
                status: 'success',
                code: 200,
                message: 'mengambil semua data',
                data,
            }).code(200);
        } catch (error) {
            // Custom error
            if (error instanceof ClientError) {
                return h.response({
                    status: 'false',
                    code: error.statusCode,
                    message: error.message,
                    data: [],
                }).code(error.statusCode);
            }

            // If server error
            return h.response({
                status: 'false',
                code: 500,
                message: error.message,
                data: [],
            }).code(500);
        }
    }

    async getSpecificDestinationHandler(req, h) {
        try {
            const { id } = req.params;
            const data = await this._service.getDestinationService(id);

            return h.response({
                status: 'success',
                code: 200,
                message: 'mengambil data',
                data,
            }).code(200);
        } catch (error) {
            // Custom error
            if (error instanceof ClientError) {
                return h.response({
                    status: 'false',
                    code: error.statusCode,
                    message: error.message,
                    data: [],
                }).code(error.statusCode);
            }

            // If server error
            return h.response({
                status: 'false',
                code: 500,
                message: error.message,
                data: [],
            }).code(500);
        }
    }

    // Update destination
    async putSpecificDestinationHandler(req, h) {
        try {
            const { id } = req.params;
            await this._service.putDestinationService(id, req.payload);

            return h.response({
                status: 'success',
                code: 200,
                message: 'destinasi berhasil diupdate',
                data: [],
            }).code(200);
        } catch (error) {
            // Custom error
            if (error instanceof ClientError) {
                return h.response({
                    status: 'false',
                    code: error.statusCode,
                    message: error.message,
                    data: [],
                }).code(error.statusCode);
            }

            // If server error
            return h.response({
                status: 'false',
                code: 500,
                message: error.message,
                data: [],
            }).code(500);
        }
    }

    // Insert new destination
    async postDestinationHandler(req, h) {
        try {
            // Send data body (req.payload) to services
            await this._service.addDestinationService(req.payload);

            return h.response({
                status: 'success',
                code: 200,
                message: 'destinasi berhasil ditambahkan',
                data: [],
            }).code(201);
        } catch (error) {
            // Custom error
            if (error instanceof ClientError) {
                return h.response({
                    status: 'false',
                    code: error.statusCode,
                    message: error.message,
                    data: [],
                }).code(error.statusCode);
            }

            // If server error
            return h.response({
                status: 'false',
                code: 500,
                message: 'peladen bermasalah',
                data: [],
            }).code(500);
        }
    }

    // Delete destination
    async deleteDestinationHandler(req, h) {
        try {
            const {id} = req.params;
            await this._service.deleteDestinationService(id);

            return h.response({
                status: 'success',
                code: 200,
                message: 'destinasi berhasil dihapus',
                data: [],
            }).code(200);
        } catch (error) {
            // Custom error
            if (error instanceof ClientError) {
                return h.response({
                    status: 'false',
                    code: error.statusCode,
                    message: error.message,
                    data: [],
                }).code(error.statusCode);
            }

            // If server error
            return h.response({
                status: 'false',
                code: 500,
                message: 'peladen bermasalah',
                data: [],
            }).code(500);
        }
    }
}

module.exports = DestinationsHandler;