# Stage 1: Build the React Application
FROM node:24-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html
# Note: If using Create React App, use /app/build instead of /app/dist

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]