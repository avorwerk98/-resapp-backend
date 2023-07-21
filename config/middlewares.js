module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {settings: {
    cors: {
      enabled: true,
      origin: ["https://newrestaurant-onf5.vercel.app"],
    },
  }
}
];
