FROM node:alpine As development
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json

RUN yarn

COPY apps/office apps/office
COPY libs libs

RUN cd apps/office && yarn

RUN yarn build office

FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn --prod

COPY --from=development usr/src/app/dist ./dist
CMD [ "node","dist/apps/office/main" ]
