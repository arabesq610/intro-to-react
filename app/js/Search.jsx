import React from "react";
import ShowCard from "./ShowCard";
import data from "../data.json";

const Search = () => (
  <div className="search">
    { data.shows.map(show => <ShowCard {...show} />) /* use jsx spread operator */ }
  </div>
);

export default Search;
