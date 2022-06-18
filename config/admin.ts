export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1c2b9ab4730626ed027a51622dc7cdc0'),
  },
});
