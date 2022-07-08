FROM node:alpine

RUN apk update

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

USER node

CMD ["yarn", "dev"]