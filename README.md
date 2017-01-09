# chat.lab3

## Task1

Новая версия генирируется с помощью файла newVersion.js (node newVersion.js), видна при запуске сервера, команде git descrive, по апи /version
example:

"v1.01-9-Jan-2017.07-20-59-1-ge0cf218"

## Task2
Чат на сокетах. (либа socket.io)
Структура была задумана таким образом, что для полного запуска стартует сервера(ветка фронт и мастер) : одни поднимается для front'a на порту 8080, второй поднимает бек на порту 1337, доступен REST'ом для фронта localhost:8080  ( очень хорошо потренировались кроссдоменные скилы пока настроить такое счастье).

настройка : 
Back : 
git clone https://github.com/Admiral-Awesome/chat
cd chat
npm i

запуск сервера

девелоп node app.js
продакшн node app.js --prod
тестирование isTest='true' app.js

Front

git clone -b front https://github.com/Admiral-Awesome/chat

cd chat
npm i
node server

## Task3 , Task4 , Task5 , Task6

тестирование jasmine

запуск тестов npm test
в истории коммитов есть успешные и не успшение сборки на тревисе
запуск примера jshint - grunt jshint
