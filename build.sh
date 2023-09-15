#! /usr/bin/env bash

docker build -t docker-n-shit .

# bootstrap docker container
docker run \
    -d \
    -p 127.0.0.1:5000:3000  \
    --mount type=bind,src=$(pwd),target=/src docker-n-shit
