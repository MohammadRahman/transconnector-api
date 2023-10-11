FROM node:alpine As development
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN yarn install

COPY apps/office apps/office
COPY libs libs
RUN yarn

RUN yarn build office

FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

RUN yarn --prod

COPY --from=development usr/src/app/dist ./dist
# CMD [ "node","dist/apps/office/main" ]
CMD ["yarn", "start:dev", "office"]
