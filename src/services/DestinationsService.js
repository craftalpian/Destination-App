const ClientError = require('../exceptions/ClientError');
const { Destinations } = require('../models');
const { uploadImageToIMGBB, validURL } = require('../utils');

class DestinationsService {
  // Get all destinations
  async getAllDestinationsService() {
    const data = await Destinations.findAll({
      attributes: ['id', 'name', 'image', 'location', 'website_url', 'instagram_url', 'description'],
      raw: true,
    });

    return data;
  }

  // Get specific destination by id
  async getDestinationService(id) {
    if (!id) {
      throw new ClientError('harap isi id dengan benar');
    }

    const data = await Destinations.findOne({
      attributes: ['id', 'name', 'image', 'location', 'website_url', 'instagram_url', 'description'],
      where: {
        id,
      },
      raw: true,
    });

    if (!data) {
      throw new ClientError('id yang Anda cari tidak ditemukan');
    }

    return data;
  }

  // Update data
  async putDestinationService(id, { name, image, location, website_url, instagram_url, description }) {
    let img = image;

    // Get url of image if image is base64 format
    if (!validURL(image) && image) {
      const { url } = await uploadImageToIMGBB(image);
      img = url;
    }

    // Insert data to database
    const update = await Destinations.update(
      {
        name,
        image: img,
        location,
        website_url,
        instagram_url,
        description,
        status: 1,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!update[0]) {
      throw new ClientError('id tidak ditemukan/gagal diperbarui');
    }
  }

  // Add new destinations
  async addDestinationService({ name, image, location, website_url, instagram_url, description }) {
    // Check data
    if (!name || !image || !location || !description) {
      throw new ClientError('harap isi semua kolom');
    }

    let image_url = image;

    // Get url of image if image is base64 format
    if (!validURL(image)) {
      const { url } = await uploadImageToIMGBB(image);
      image_url = url;
    }

    // Insert data to database
    const data = await Destinations.create(
      {
        name,
        image: image_url,
        location,
        website_url,
        instagram_url,
        description,
        status: 1,
      },
      {
        raw: true,
      }
    );

    return data.null;
  }

  // Delete destinations
  async deleteDestinationService(id) {
    // Delete destination from database
    await Destinations.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = DestinationsService;
