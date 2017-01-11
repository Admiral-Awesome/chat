!#/bin/bash




exec nohup mongod &

sleep 60

exec npm test

