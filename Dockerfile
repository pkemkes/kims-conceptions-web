FROM node:22-alpine AS build

WORKDIR /app

RUN npm install -g pnpm@10.14.0 http-server

COPY . .

RUN pnpm install

CMD pnpm run build && http-server /app/build -p 80
