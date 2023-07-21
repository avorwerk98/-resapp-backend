module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS,', 's4RAEbsJAcvpmMgGdWkmMQ==','/yh3FHR2u3SHyaSH8v1IZw==','5TcP4sY0KOl5t7a3ycuBwg==','thCs474mxnaSVY1+fk3QtA=='),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
