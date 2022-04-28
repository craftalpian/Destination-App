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

// https://stackoverflow.com/a/5717133
const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

module.exports = {
    uploadImageToIMGBB,
    validURL,
};