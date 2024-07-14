const generateText = require("./ai");

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

const goroButtons = zodiacSigns.map((sign, index) =>
    ` ${sign.symbol} ${sign.name}`
);

const zodiacSymbols = zodiacSigns.map((sign, index) =>
    `${sign.symbol}`
);

const isZodiacSign = (value)=> {
    return zodiacSymbols.findIndex(element => {
            return value.indexOf(element) !== -1
    });
}

const prediction = async (value) => {
    const errorMessage = 'Звезды вас не поняли. Воспользуйтесь кнопками.';

    if (value === undefined) {return errorMessage;}

    const index = isZodiacSign(value);

    if (index > -1) {
        const sign = zodiacSigns[index].name;
        try {
            return await generateText(sign);

        } catch (e) {
            console.error("Ошибка:  : " + e);
            return errorMessage;
        }

    } else {
        console.log(errorMessage);
        return errorMessage;
    }
}

const goroKeyboard = [
    goroButtons.slice(0, 3),
    goroButtons.slice(3, 6),
    goroButtons.slice(6, 9),
    goroButtons.slice(9, 12),
];

module.exports = {
    goroKeyboard,
    prediction
};