# Stage 1: Build Angular app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist/german-cuisine-kg /usr/share/nginx/html
EXPOSE 80
