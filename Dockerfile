From node:19-alpine3.16

WORKDIR /usr/src/app

EXPOSE 4173

COPY . .

RUN npm install --force

RUN npm run build

CMD ["npm", "run", "preview"]