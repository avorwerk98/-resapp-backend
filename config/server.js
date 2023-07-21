module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', 'eCJbEumgT3SPBzlGEX1Rlw==','+nyEW8h3HXoL5OCkfu+Qwg==','mtAYsYQrorZXhkGU4JRudw==','pq/n53DFS40qe6qtnFZBNQ=='),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
