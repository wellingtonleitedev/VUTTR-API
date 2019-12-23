FROM node:11-alpine

RUN mkdir -p /home/vuttr/node_modules && chown -R node:node /home/vuttr

WORKDIR /home/vuttr

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3000

CMD ["yarn", "start"]