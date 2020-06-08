FROM node:12-alpine

COPY --chown=node:node . ./src

WORKDIR /src
# docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=incrementor-data,target=/data incrementor
CMD [ "node", "index.js" ]