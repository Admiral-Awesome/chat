# chat.lab3

## Task1

Новая версия генирируется с помощью файла newVersion.js (node newVersion.js), видна при запуске сервера, команде git descrive, по апи /version
example:

"v1.01-9-Jan-2017.07-20-59-1-ge0cf218"

## Task2
Чат на сокетах. (либа socket.io)
Структура была задумана таким образом, что для полного запуска стартует 2 сервера(ветка фронт и мастер) : одни поднимается для front'a на порту 8080, второй поднимает бек на порту 1337, доступен REST'ом для фронта localhost:8080  ( очень хорошо потренировались кроссдоменные скилы пока настроить такое счастье).

настройка : <br />
Back :<br /> 
git clone https://github.com/Admiral-Awesome/chat<br />
cd chat<br />
npm i<br />

запуск сервера<br />

девелоп node app.js<br />
продакшн node app.js --prod<br />
тестирование isTest='true' node app.js<br />

Front<br />

git clone -b front https://github.com/Admiral-Awesome/chat<br />

cd chat<br />
npm i<br />
 запуск node server<br />

## Task3 , Task4 , Task5 , Task6

тестирование jasmine <br />

запуск тестов npm test<br />
в истории коммитов есть успешные и не успшение сборки на тревисе<br />
запуск примера jshint - grunt jshint<br />
