FROM node

ENV PORT=5050

EXPOSE 5050

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

USER node

CMD ["yarn", "dev"]