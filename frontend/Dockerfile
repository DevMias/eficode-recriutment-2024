FROM node:14

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 3000

# Set the environment variable for the backend endpoint
ENV ENDPOINT=http://localhost:9000/api

CMD ["npm", "start"]
