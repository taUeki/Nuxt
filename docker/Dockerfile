FROM node:alpine

WORKDIR /app

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g @vue/cli \
    npm install -g nuxt && \
    npm install -g create-nuxt-app && \
    npm install -g firebase-tools

ENV HOST 0.0.0.0
EXPOSE 8088
