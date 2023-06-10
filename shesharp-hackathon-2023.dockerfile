FROM node:18-alpine3.16
WORKDIR /base
COPY ./public /base/public
COPY ./src /base/src
COPY ./.eslintrc.json /base/
COPY ./.gitignore /base/
COPY ./.env /base/
COPY ./package.json /base/
RUN npm i
RUN npm run build
CMD ["npm","start"]
