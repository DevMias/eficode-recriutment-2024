FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

# Set environment variables
ENV APPID=cd48225572f420a5d0619a255c3488f4
ENV MAP_ENDPOINT=http://api.openweathermap.org/data/2.5
ENV TARGET_CITY=Helsinki,fi


CMD ["node", "index.js"]
