!#/bin/bash




exec nohup mongod &

sleep 60

exec node app --prod






