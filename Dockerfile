# Используем официальный образ Node.js в качестве базового
FROM node:14-alpine
ENV NODE_ENV=production

# Создание директории приложения внутри образа
WORKDIR /usr/src/app

# Установка зависимостей
COPY package*.json ./
RUN npm install
RUN #npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Копирование исходных файлов в образ
COPY . .

# Сборка React приложения
RUN npm run build

# Определение команды по умолчанию для запуска приложения
CMD ["npm", "start"]
