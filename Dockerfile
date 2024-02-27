FROM node:15.13-alpine

WORKDIR /site

ENV PATH=./node_modules/.bin:$PATH

COPY . .

RUN npm run build

CMD ["npm", "start"]