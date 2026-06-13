# Dockerfile (raíz del proyecto)
# Imagen para el frontend — build de React + servidor estático

# ── ETAPA 1: Build ──────────────────────────────────────────
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── ETAPA 2: Servir archivos estáticos ─────────────────────
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]