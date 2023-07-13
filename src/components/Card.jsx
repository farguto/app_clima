import React from "react";
import { useTheme, Progress } from "@nextui-org/react";
 

const Card = ({ loadingData, showData, weather }) => {
  const { theme } = useTheme();

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  var url = "";
  var iconUrl = "";

  if (loadingData) {
    return  <Progress
    indeterminated
    value={50}
    color="secondary"
    status="secondary"
  />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
  }

  return (
    <div>
      {showData === true ? (
        <div style={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          display:'flex',
          justifyContent: 'center',
          textAlign: 'center',

        }}>
          <div>
            <div>
              <div>
                <h3
                  style={{
                    color: theme.colors.black.value,
                    fontSize: theme.fontSizes.lg.value,
                    padding: `${theme.space[6].value} ${theme.space[4].value}`,
                  }}
                >
                  {weather.name.toUpperCase()}
                </h3>
                <p
                  style={{
                    color: theme.colors.black.value,
                    fontSize: theme.fontSizes.lg.value,
                    padding: `${theme.space[2].value} ${theme.space[4].value}`,
                  }}
                >
                  {date}
                </p>
                <h1
                  style={{
                    color: theme.colors.black.value,
                    fontSize: theme.fontSizes.lg.value,
                    padding: `${theme.space[8].value} ${theme.space[4].value}`,
                  }}
                >
                  {(weather.main.temp - 273.15).toFixed(1)}ºC
                </h1>

                <p
                  style={{
                    color: theme.colors.black.value,
                    fontSize: theme.fontSizes.lg.value,
                    padding: `${theme.space[2].value} ${theme.space[4].value}`,
                  }}
                >
                  <img src={iconUrl} alt="icon" />
                  {weather.weather[0].description.toUpperCase()}
                </p>
              </div>
              <div>
                <div>
                  <h5
                    style={{
                      color: theme.colors.primary.value,
                      fontSize: theme.fontSizes.lg.value,
                      padding: `${theme.space[2].value} ${theme.space[4].value}`,
                    }}
                  >
                    Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5
                    style={{
                      color: theme.colors.primary.value,
                      fontSize: theme.fontSizes.lg.value,
                      padding: `${theme.space[2].value} ${theme.space[4].value}`,
                    }}
                  >
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5
                    style={{
                      color: theme.colors.primary.value,
                      fontSize: theme.fontSizes.lg.value,
                      padding: `${theme.space[2].value} ${theme.space[4].value}`,
                    }}
                  >
                    Sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5
                    style={{
                      color: theme.colors.primary.value,
                      fontSize: theme.fontSizes.lg.value,
                      padding: `${theme.space[2].value} ${theme.space[4].value}`,
                    }}
                  >
                    Humedad: {weather.main.humidity}%
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2
        style={{
        
          display:'flex',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px',

        }}
                
        >No hay datos</h2>
      )}
    </div>
  );
};

export default Card;
