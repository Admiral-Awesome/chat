# chat.lab3 (Lab 4 ниже)

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


# chat.Lab4 <br />

##task 1,2 <br />

докер полностью собирает всю среду окружения так же запускает доп сервисы как например монго, без которой сервер не поднимется <br />

для упрощения были сделанны комманды запуска (полные комманды доступны в package.json) <br />

команды : <br />

buld & run "npm run docker" <br />
run - "npm run docker-run"<br />
build - "npm run docker-build"<br />
test - "npm run docker-test"<br />

##task 3 

пример сборки докер теста на тревисе коммит "docker travis"<br />
запущен с помощью комманды npm run docker-test <br />
файл докера Dockertest<br />

