FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm run db:setup

RUN npm install

COPY . .

RUN npm run build && \
    npm run database

EXPOSE 3000

CMD ["node", "dist/main"]
