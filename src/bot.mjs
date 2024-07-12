import TeleBot from "telebot"
//import {OpenAI} from 'openai';

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

//const openai = new OpenAI({apiKey: process.env.OPEN_API_TOKEN});



/*async function ai(value) {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `Сделай короткое предсказание для знака ${value}`}],
            model: "gpt-3.5-turbo",
        });
        return response.choices[0].message.content;
    } catch (error) {
        return 'Сегодня звезды не хотят отвечать вам. Попробуйте позже';
    }
}*/


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

const replyMarkup = bot.inlineKeyboard([
    [
        bot.inlineButton('♈️ Овен', {callback: 'sign_0'}),
        bot.inlineButton('♉️ Телец', {callback: 'sign_1'}),
        bot.inlineButton('♊️ Близнецы', {callback: 'sign_2'}),
        bot.inlineButton('♋️ Рак', {callback: 'sign_3'}),
    ], [
        bot.inlineButton('♌️ Лев', {callback: 'sign_4'}),
        bot.inlineButton('♍️ Дева', {callback: 'sign_5'}),
        bot.inlineButton('♎️ Весы', {callback: 'sign_6'}),
        bot.inlineButton('♏️ Скорпион', {callback: 'sign_7'}),
    ], [
        bot.inlineButton('♐️ Стрелец', {callback: 'sign_8'}),
        bot.inlineButton('♑️ Козерог', {callback: 'sign_9'}),
        bot.inlineButton('♒️ Водолей', {callback: 'sign_10'}),
        bot.inlineButton('♓️ Рыбы', {callback: 'sign_11'}),
    ]
]);


// Обработка команды /start
bot.on(['/start'], (msg) => {
    bot.sendMessage(msg.chat.id, 'Выберите знак зодиака:', {replyMarkup});
  });

bot.on('callbackQuery', (msg) => {

    const data = msg.data; // callback_data кнопки
    const index = data.split('_')[1];
    const sign = zodiacSigns[index]

    bot.sendMessage(msg.from.id, `Вы выбрали знак: ${sign.symbol} ${sign.name}`);
    
  /*  ai(sign.name).then((prediction) => {
    //console.log (prediction);
        bot.sendMessage(msg.chat.id, prediction);
    }).catch((error) => {
        console.error('Error sending message:', error);
        bot.sendMessage(msg.chat.id, 'Произошла ошибка при отправке предсказания.');
    });*/

    // Подтверждение получения обратного вызова
    bot.answerCallbackQuery(msg.id, {
        text: 'Button pressed', // Сообщение, которое увидит пользователь
        showAlert: false // Либо true для отображения всплывающего окна
    });

});


export default bot;
