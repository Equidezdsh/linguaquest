# backend/Dockerfile
# Imagen para el servidor Node.js + Express + SQLite

FROM node:22-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json primero (mejor uso de caché)
COPY package*.json ./

# Instalar dependencias de producción
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Puerto que expone el contenedor
EXPOSE 3001

# Comando para arrancar el servidor
CMD ["node", "server.js"]