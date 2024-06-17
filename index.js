const TelegramApi = require('node-telegram-bot-api');

const token = '7410641455:AAEE1l8z-jnRKL-AwYiqdNPN1fBQ72o0Fwk';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        await bot.sendSticker(chatId, 'https://cdn.tlgrm.ru/stickers/0fa/d9f/0fad9f6f-8455-41bc-a453-e8d389c2dadd/256/1.webp');
        await bot.sendMessage(chatId, `Добро пожаловать!`);
    }
    if (text === '/info') {
        await bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
    }

})