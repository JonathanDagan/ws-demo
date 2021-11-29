FROM node:lts

COPY . .

RUN yarn

ENTRYPOINT [ "yarn", "start" ]