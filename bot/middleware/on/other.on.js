const bot = require("../../connection/token.connection");
const {prediction} = require("../../components/goro/ui");

module.exports = bot.on('message', async (ctx) => {
        const data = ctx.message.text;
        if (data !=='/start') {
                ctx.reply(await prediction(data));
        }
});