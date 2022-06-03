FROM nginx
COPY Infrastructure/nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html