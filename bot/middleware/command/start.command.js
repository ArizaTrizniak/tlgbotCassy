const { Markup } = require("telegraf");
const bot = require("../../connection/token.connection");
const {goroKeyboard} = require("../../components/goro/ui");

module.exports = bot.start(ctx => {
   try {
      return ctx.reply(
          "Выберите знак зодиака",
          Markup.inlineKeyboard(goroKeyboard),
      );

   } catch (e) {
      console.log(e);
   }
});