FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ./dist/Angular_personal_homepage/browser .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]