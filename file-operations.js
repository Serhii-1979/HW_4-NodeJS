const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const filename = process.env.FILENAME;


const content = 'Hello, this is a test content!';
fs.writeFile(filename, content, (err) => {
    if (err) {
        return console.error(`Ошибка при записи в файл: ${err.message}`);
    }
    console.log(`Данные успешно записаны в файл ${filename}`);

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return console.error(`Ошибка при чтении файла: ${err.message}`);
        }
        console.log(`Содержимое файла ${filename}:`);
        console.log(data);
    });
});
