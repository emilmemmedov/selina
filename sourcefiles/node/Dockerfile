FROM node:17-alpine

WORKDIR /application

COPY package*.json /application/

#RUN npm install

COPY . /application

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]