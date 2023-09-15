#! /usr/bin/env bash

# force remove all running containers
docker rm -vf $(docker ps -aq)

# force remove all images
docker rmi -f $(docker images -aq)

