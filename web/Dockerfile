# web/Dockerfile
# Base stage
FROM node:14-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS development
EXPOSE 3000
CMD ["npm", "start"]

# Production stage
FROM base AS build
RUN npm run build

FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
