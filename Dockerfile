FROM node:latest

ADD . /code
WORKDIR /code
VOLUME /code

RUN npm install -g typescript
RUN npm install
RUN tsc; exit 0

EXPOSE 80
CMD npm start
