import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput.jsx";

function BoilingVerdict(props) {

  if(props.celsius >= 100) {
    return <p>물이 끓습니다.</p>
  }
  return(
   <p>물이 끓지 않습니다.</p>
  );
}

function toCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

function toFarenheit(celsius) {
  return (celsius * 9) /5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (t) => {
    setTemperature(t);
    setScale("c");
  }

  const handleFarenheitChange = (t) => {
    setTemperature(t);
    setScale("f");
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;

  return (
    <div>
      <TemperatureInput scale={'c'} temperature={celsius} onTC={handleCelsiusChange}/>
      <TemperatureInput scale={'f'} temperature={fahrenheit} onTC={handleFarenheitChange}/>
      <BoilingVerdict celsius={parseFloat(celsius)}/>
    </div>
  );
}

export default Calculator