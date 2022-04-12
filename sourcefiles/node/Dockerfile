FROM node:17-alpine

WORKDIR /application

COPY package*.json /application/

RUN npm install

RUN npm i -g typeorm

RUN npm install -g ts-node

COPY . /application

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]