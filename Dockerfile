FROM node:12.19.0

WORKDIR /app

COPY ./ /app
RUN rm -rf .next
RUN rm -rf node_modules
RUN npm i

ENV NEXT_PUBLIC_WEB_ENDPOINT "https://lermo.io"
ENV NEXT_PUBLIC_API_ENDPOINT "https://api.lermo.io"
ENV NEXT_PUBLIC_TRANSCODER_ENDPOINT "https://transcoder.lermo.io"
ENV NEXT_PUBLIC_CONF_ENDPOINT "https://conf.lermo.io"
ENV NEXT_PUBLIC_WS_ENDPOINT='https://chat.lermo.io'

RUN yarn run build
ENTRYPOINT yarn start