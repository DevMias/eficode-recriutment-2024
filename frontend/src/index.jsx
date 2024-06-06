import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = 'http://172.20.0.2:9000/api';

const getWeatherFromApi = async () => {
  console.log("start api")
  try {
    const response = await fetch(`${baseURL}/weather`, {
        headers: {
          "Content-Type": "application/json",
      }
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
    };
  }

  async componentDidMount() {
    const weather = await getWeatherFromApi();
    console.log(weather);
    this.setState({icon: weather.icon.slice(0, -1)});
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} /> }
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
