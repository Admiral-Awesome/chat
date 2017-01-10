!#/bin/bash
exec docker stop $(docker ps -a -q)

exec docker rm $(docker ps -a -q)