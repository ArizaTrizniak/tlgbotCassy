const bot = require("../../connection/token.connection");
const {goroSign} = require("../../components/goro/ui");
const generateText = require("../../components/goro/ai");

module.exports = bot.on("callback_query", async (callbackQuery) => {
    const data = callbackQuery.update.callback_query.data;
    const index = data.split('_')[1];
    const sign = goroSign(index)

    await callbackQuery.replyWithHTML(`Вы выбрали знак, <b>${sign}</b>.`);

    try {
        let result = await generateText(sign);
        return callbackQuery.reply(result);
    } catch (e) {
        console.error("Ошибка: callback_query : " + e);
    }
});