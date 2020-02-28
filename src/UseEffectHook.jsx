import React, { useEffect, useState } from "react";
import axios from "axios";

export default ({ name = "Jess" }) => {
  const initialState = "redux";
  const [count, setCount] = useState(0);
  const [data, updateData] = useState({ hits: [] });
  const [query, updateQuery] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      updateData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} time(s)`);
    }, 3000);
  });

  useEffect(() => {
    const docTitle = `Hello ${name}`;
    document.title = docTitle;
    console.log(`setting document title to ${docTitle}`);
  }, [name]);

  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       setCount(c => c + 1);
  //       console.log("setting count in interval")
  //     }, 1000);
  //     return () => clearInterval(id);
  //   }, []);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <p>You clicked {count} time(s)</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <label htmlFor="searchHacker">Search </label>
      <input
        placeholder="search hacker news"
        value={query}
        onChange={e => updateQuery(e.target.value)}
        name="searchHacker"
        id="searchHacker"
      />

      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
