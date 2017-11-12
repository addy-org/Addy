FROM node:latest

WORKDIR /usr/src

COPY package.json .

RUN npm install gulp -g
RUN npm install

COPY src/ .