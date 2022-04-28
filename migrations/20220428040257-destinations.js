'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('destinations', {
    id: {
      type: 'int',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      length: 11
    },
    name: {
      type: 'string',
      notNull: false,
      length: 255
    },
    image: {
      type: 'text',
      notNull: false,
    },
    location: {
      type: 'text',
      notNull: false,
    },
    website_url: {
      type: 'string',
      notNull: false,
      length: 255
    },
    instagram_url: {
      type: 'string',
      notNull: false,
      length: 255
    },
    description: {
      type: 'text',
      notNull: false
    },
    status: {
      type: 'int',
      notNull: false,
      length: 11
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP'),
    },
  }, function (err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function (db, callback) {
  db.dropTable(destinations, callback);
};

exports._meta = {
  "version": 1
};
