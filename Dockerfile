FROM node:8

ADD . /app
WORKDIR /app
RUN npm install
