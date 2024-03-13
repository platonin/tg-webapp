# Используем официальный образ Node.js в качестве базового
FROM node:14-alpine

# Установка переменной окружения для корректной работы Node.js и npm
ENV NODE_ENV=production

# Создание директории приложения внутри образа
WORKDIR /usr/src/app

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование исходных файлов в образ
COPY . .

# Сборка React приложения
RUN npm run build

# Определение команды по умолчанию для запуска приложения
CMD ["npm", "start"]