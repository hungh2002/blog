FROM node:lts-alpine

RUN npm config set registry https://registry.npmjs.com/

WORKDIR /app

COPY package*.json ./

RUN npm ci -f

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]