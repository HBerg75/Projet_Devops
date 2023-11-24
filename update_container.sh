#!/bin/bash


DOCKER_IMAGE_NAME="hber75/projet_devops"
docker stop projet_devops && docker rm projet_devops

docker pull $DOCKER_IMAGE_NAME

docker run -d --name projet_devops -p 80:80 $DOCKER_IMAGE_NAME
