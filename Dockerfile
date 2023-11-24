FROM node:18-alpine3.17

WORKDIR /app

EXPOSE 4200

RUN yarn set version canary

COPY ./package.json .
COPY ./.env.prod ./.env

RUN yarn

COPY ./ ./
COPY ./.env.prod ./.env

EXPOSE $PORT

RUN yarn build

CMD yarn start:prod
