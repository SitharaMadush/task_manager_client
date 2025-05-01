# Dockerfile
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port (Vite's default)
EXPOSE 5173

# Run the dev server
CMD ["npm", "run", "dev", "--", "--host"]
