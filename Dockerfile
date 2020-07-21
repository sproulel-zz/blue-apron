FROM node:12.18-alpine3.9
WORKDIR app
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
