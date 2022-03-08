FROM node:16-alpine

RUN apk add --no-cache curl alpine-sdk python2 git
RUN adduser -D moleculer

USER moleculer

RUN mkdir /home/moleculer/app
COPY ./ /home/moleculer/app

WORKDIR /home/moleculer/app
RUN ls
RUN npm ci

WORKDIR /home/moleculer/app
CMD ["node", "app.js"]
