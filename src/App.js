import React, { Component } from "react";
import "./App.css";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements
} from "react-instantsearch-dom";

const App = () => (
  <InstantSearch
    appId="latency"
    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
    indexName="bestbuy"
  >
    <Search />
  </InstantSearch>
);

const Search = () => (
  <div className="container">
    <CurrentRefinements />
    <ClearRefinements />
    <SearchBox />
    <RefinementList attribute="category" />
    <Hits hitComponent={Product} />
    <Pagination />
  </div>
);

const Product = ({ hit }) => (
  <div style={{ marginTop: "10px" }}>
    <span className="hit-name">
      <Highlight attribute="name" hit={hit} />
    </span>
  </div>
);

export default App;
