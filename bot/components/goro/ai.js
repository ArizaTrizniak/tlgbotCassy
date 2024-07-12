const OpenAIApi  = require('openai');
require('dotenv').config();

const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generateText(value) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{
                role: 'user',
                content: `Ты - специалист по составлению гороскопов.Сделай короткое предсказание для знака ${value}.`
            }],
            model: 'gpt-3.5-turbo',
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Ошибка при генерации текста:', error);
        return 'Сегодня звезды не хотят отвечать вам. Попробуйте позже';
    }
}

module.exports = generateText;

