require('dotenv').config();
const debug = require('debug')('weathermap');
const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios'); //changed from fetch
const cors = require('@koa/cors');

const appId = process.env.APPID;
const mapURI = process.env.MAP_ENDPOINT;
const targetCity = process.env.TARGET_CITY;
const port = process.env.PORT || 9000;

const app = new Koa();
const router = new Router();

app.use(cors());

const fetchWeather = async () => {
  const endpoint = `${mapURI}/weather?q=${targetCity}&appid=${appId}`;
  const response = await axios.get(endpoint);
  return response.data;
};

router.get('/api/weather', async ctx => {
  const weatherData = await fetchWeather();
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData.weather[0] : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
