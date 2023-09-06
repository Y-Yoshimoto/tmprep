# Nginx リバースプロキシ用コンテナ
FROM nginx:stable-bullseye

# リバースプロキシ設定ファイルをコンテナにコピー
COPY rproxy.conf /etc/nginx/conf.d/default.conf
#COPY rproxy.conf /etc/nginx/conf.d/rproxy.conf
# 内部リンク掲載用ページを配置
COPY index.html /usr/share/nginx/html/index.html
# ポート番号を公開
EXPOSE 80 443

# コンテナ起動時に Nginx を起動
CMD ["nginx", "-g", "daemon off;"]
