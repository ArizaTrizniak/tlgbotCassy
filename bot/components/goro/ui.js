const {Markup} = require("telegraf");
const bot = require("../../connection/token.connection");

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

const buttons = zodiacSigns.map((sign, index) =>
    Markup.button.callback(`${sign.symbol} ${sign.name}`, `sign_${index}`)
);


const goroKeyboard = [
        buttons.slice(0, 3),
        buttons.slice(3, 6),
        buttons.slice(6, 9),
        buttons.slice(9, 12),
    ];

const goroSign = (index) => {
    const sign = zodiacSigns[index];
    return sign.name;
};

module.exports = {
    goroSign,
    goroKeyboard
};