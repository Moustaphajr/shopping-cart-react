import React from "react";
import { useState } from "react";

const Search = ({ element, setElment }) => {
  return (
    <>
      <select
        defaultValue={element}
        onChange={() => {
          setElment(e.target.value);
        }}
        className="select select-bordered w-full max-w-xs"
      >
        <option>trier par catégorie</option>
        <option>classique</option>
        <option>extérieur</option>
        <option>plante grasse</option>
      </select>
    </>
  );
};

export default Search;
