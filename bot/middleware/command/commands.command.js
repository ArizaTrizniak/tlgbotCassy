const bot = require("../../connection/token.connection");

module.exports = bot.settings( ctx => {
   ctx.telegram.setMyCommands([
         {
            command: '/start',
            description: 'Гороскоп'
         },
      ]);
});

