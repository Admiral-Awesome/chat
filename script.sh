!#/bin/bash




exec nohup mongod &

sleep 50

exec node app --prod






