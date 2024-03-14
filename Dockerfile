# используем официальный образ Node.js
FROM node:14-alpine
ENV NODE_ENV=production

# создание директории приложения внутри образа
WORKDIR /usr/src/app

# копирует файлы package.json и package-lock.json из локальной контекста сборки внутрь контейнера
COPY package*.json ./
# установка зависимостейъ
RUN npm install
RUN #npm install --save-dev @babel/plugin-proposal-private-property-in-object

# копирование исходных файлов в образ
COPY . .

# сборка React приложения
RUN npm run build

# определение команды по умолчанию для запуска приложения
CMD ["npm", "start"]
