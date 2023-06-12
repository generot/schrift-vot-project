FROM node:16.13.0

WORKDIR /schrift

COPY ./server/*  ./server/
COPY ./client/html/* ./client/html/
COPY ./client/js/* ./client/js/
COPY ./client/css/* ./client/css/
COPY ./client/images/* ./client/images/
COPY ./*.json ./

RUN npm install

EXPOSE 8080
CMD npm start