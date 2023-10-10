FROM node:latest
LABEL  maintainer "y.yoshimoto"

# ワークディレクトリ作成
WORKDIR /usr/src/app
# npmパッケージ
COPY package*.json ./
RUN npm install
# RUN npm install --only=production
# ソースコード配置
RUN mkdir contents
COPY contents/* ./contents/

EXPOSE 8080
# CMD [ "nodemon", "./contents/server.js" ]
# CMD [ "node", "./contents/server.js" ]
CMD [ "npm", "run", "dev" ]
#CMD [ "tail", "-f" , "/dev/null"]
