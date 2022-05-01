FROM node:14

RUN npm install -g @vue/cli@4.5.15

WORKDIR /app

CMD [ "sh", "entrypoint.sh" ]