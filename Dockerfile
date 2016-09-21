FROM node:latest
ADD . /code
WORKDIR /code
CMD npm start