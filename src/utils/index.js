const imgbbUploader = require('imgbb-uploader');

const uploadImageToIMGBB = async (base64string) => {
    return new Promise(async (res, rej) => {
        try {
            const upload = await imgbbUploader({
                apiKey: process.env.IMGBB_API,
                expiration: 30 * 86400,
                base64string,
            });

            res(upload);
        } catch (error) {
            rej(error);
        }
    });
}

module.exports = {
    uploadImageToIMGBB,
};