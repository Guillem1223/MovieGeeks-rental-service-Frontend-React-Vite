import React, { useState } from "react";

export const Search = ({ onNewMovies }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onNewMovies(inputValue.trim());
  };
  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};
