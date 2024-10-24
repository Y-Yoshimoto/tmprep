# https://hub.docker.com/_/microsoft-playwright
# https://playwright.dev/docs/docker
FROM mcr.microsoft.com/playwright
LABEL maintaner='y-yoshimoto'

# 補助ツールのインストール
RUN apt-get update && apt-get install -y curl zip jq sudo fonts-noto fonts-noto-cjk \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 実行ユーザー追加
ARG USERNAME=vscode
ARG USER_UID=501
ARG USER_GID=20
RUN useradd -m -s /bin/bash -u $USER_UID -g $USER_GID $USERNAME \
    && usermod -a -G 0 $USERNAME
ENV NODE_ENV=development

# テストディレクトリ名指定
ARG APPNAME=E2Etest
# アプリケーションのディレクトリ作成/権限変更
RUN mkdir -p /$APPNAME/test-src \
    && mkdir -p /$APPNAME/.vscode \
    && mkdir -p /$APPNAME/.cache \
    && chown $USERNAME:dialout /$APPNAME/* \
    && chown $USERNAME:dialout /$APPNAME/.* \
    && mkdir -p /vscode/vscode-server/ \
    && chown $USERNAME:dialout /vscode/vscode-server/ \
    && chown $USERNAME:dialout /vscode/vscode-server/.*

# package.jsonのコピー
COPY ./E2Etest/package.json /$APPNAME/package.json

# ユーザー変更/作業ディレクトリ変更
WORKDIR /$APPNAME
# yarnInstall
RUN sudo -u $USERNAME npm install --save-dev\
    && sudo -u $USERNAME npm cache clean --force \
    && sudo -u $USERNAME npm run cypress install \
    && echo "alias cypress='/E2Etest/node_modules/.bin/cypress'" >> /etc/bash.bashrc \
    && echo "alias test='/E2Etest/node_modules/.bin/cypress run'" >> /etc/bash.bashrc 
# Cypressのディレクトリの権限変更
#ENV CYPRESS_CACHE_FOLDER=$APPNAME/.cache/
#RUN mkdir -p /root/.cache/ \
#    && chown $USERNAME:dialout /root/.cache/

# 設定ファイルをコンテナにコピー
COPY ./E2Etest/cypress.config.js /$APPNAME/cypress.config.js

# テストスクリプトをコンテナにコピー
#COPY ./E2Etest/test-src /$APPNAME/test-src 
RUN chown $USERNAME:dialout /$APPNAME/*


# テストスクリプトをコンテナにコピー
#COPY cypress_c /cypress_c

# cypress install
# cypress run --browser chrome
# docker cp rportal_v-cypress_c-1:/E2Etest/results/videos/test.cy.js.mp4 ./