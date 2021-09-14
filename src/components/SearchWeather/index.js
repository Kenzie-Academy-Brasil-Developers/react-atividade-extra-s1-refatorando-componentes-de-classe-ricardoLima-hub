import { useState, useEffect} from "react";

import "./style.css";

const SearchWeather = ({handleChangeWeather}) => {
  const [inputValue, setInputValue] = useState("Curitiba");

  const componentDidMount = () => {
    handleSubmit();
  }

  const handleSubmit = () => {
    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, inputValue));
  };

  useEffect(() => {
    componentDidMount("Curitiba")
  });

    return (
      <div className="search-container">
        <div>
          <input
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value )}
          />
        </div>
        <div>
          <button className="search-button" onClick={() => componentDidMount()}>
            Search
          </button>
        </div>
      </div>
    );
}

export default SearchWeather;
