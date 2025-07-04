
# Étape 1 : build Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration=production

# Étape 2 : servir l'app avec Nginx
FROM nginx:alpine
COPY --from=build /app/dist/exam-manager /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
