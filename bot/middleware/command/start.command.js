const { Markup } = require("telegraf");
const bot = require("../../connection/token.connection");
const {goroKeyboard} = require("../../components/goro/ui");

module.exports = bot.start(ctx => {
   try {
      ctx.reply('Выберите знак зодиака', Markup.keyboard(goroKeyboard).resize().persistent());
   } catch (e) {
      console.log(e);
   }
});
