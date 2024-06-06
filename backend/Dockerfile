# Use a lightweight Node.js image as base
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Expose port 9000
EXPOSE 9000

# Command to run the backend server
CMD ["node", "src/index.js"]
