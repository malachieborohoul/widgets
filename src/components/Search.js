import "./Search.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>

          {result.snippet}
        </div>
        <div className="button-content">
            <a className="button" target={"_blank"} href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="search">
        <div className="form">
          <label>Search</label>
          <input type={"text"} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
     {renderedResults}
     
    

    </div>
  );
};

export default Search;
