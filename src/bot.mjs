import TeleBot from "telebot"
/*import {OpenAI} from 'openai';*/

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

/*const openai = new OpenAI({
    apiKey: process.env.OPEN_API_TOKEN,
});

async function ai(value) {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `Сделай короткое предсказание для знака ${value}`}],
            model: "gpt-3.5-turbo",
        });
        return response.choices[0].message.content;
    } catch (error) {
        return 'Сегодня звезды не хотят отвечать вам. Попробуйте позже';
    }
}
*/

const zodiacSigns = [
    { name: 'Овен', symbol: '♈️' },
    { name: 'Телец', symbol: '♉️' },
    { name: 'Близнецы', symbol: '♊️' },
    { name: 'Рак', symbol: '♋️' },
    { name: 'Лев', symbol: '♌️' },
    { name: 'Дева', symbol: '♍️' },
    { name: 'Весы', symbol: '♎️' },
    { name: 'Скорпион', symbol: '♏️' },
    { name: 'Стрелец', symbol: '♐️' },
    { name: 'Козерог', symbol: '♑️' },
    { name: 'Водолей', symbol: '♒️' },
    { name: 'Рыбы', symbol: '♓️' },
];

const buttons = zodiacSigns.map((sign, index) => ({
    text: `${sign.symbol} ${sign.name}`,
    callback_data: `sign_${index}`,
}));

const keyboard = {
    inline_keyboard: [
        buttons.slice(0, 3),
        buttons.slice(3, 6),
        buttons.slice(6, 9),
        buttons.slice(9, 12),
    ],
};


/*bot.setMyCommands([
    {command: '/start', 'description': 'Гороскоп.'},
]);*/

/*bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        return bot.sendMessage(chatId, 'Выберите знак зодиака:', {
            reply_markup: keyboard,
        });
    }

    return bot.sendMessage(chatId, 'Звёзды не поняли вас')
});

// Обработчик нажатий на кнопки
bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const data = callbackQuery.data;
    const index = data.split('_')[1];
    const sign = zodiacSigns[index];

    bot.sendMessage(
        msg.chat.id,
        `Вы выбрали знак: ${sign.symbol} ${sign.name}`);

    ai(sign.name).then((prediction) => {
        bot.sendMessage(msg.chat.id, prediction);
    }).catch((error) => {
        console.error('Error sending message:', error);
        bot.sendMessage(msg.chat.id, 'Произошла ошибка при отправке предсказания.');
    });
});*/

bot.on("text", msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        return bot.sendMessage(chatId, 'Выберите знак зодиака:', {
            reply_markup: keyboard,
        });
    }
    msg.reply.text(msg.text)
})

// On commands
bot.on(['/start'], msg => {

    let replyMarkup = bot.keyboard([
        [ '/inlineKeyboard'],
        ['/start', '/hide']
    ], {resize: true});

    return bot.sendMessage(msg.from.id, 'Keyboard example.', {replyMarkup});

});

// Inline buttons
bot.on('/inlineKeyboard', msg => {

    let replyMarkup = bot.inlineKeyboard([
        [
            bot.inlineButton('callback', {callback: 'this_is_data'}),
            bot.inlineButton('inline', {inline: 'some query'})
        ], [
            bot.inlineButton('url', {url: 'https://telegram.org'})
        ]
    ]);

    return bot.sendMessage(msg.from.id, 'Inline keyboard example.', {replyMarkup});

});

export default bot;

