FROM node:22-alpine3.20 AS build

WORKDIR /app

RUN npm install -g pnpm http-server

COPY . .

RUN pnpm install

CMD pnpm run build && http-server /app/build -p 80
