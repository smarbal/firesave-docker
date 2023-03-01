FROM node:18

WORKDIR /api-app
COPY package.json .
RUN npm cache clean --force
RUN npm install --no-package-lock
RUN npx sequelize-cli db:seed:all
COPY . .
CMD npm start