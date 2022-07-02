import React from "react";
import useFetchData from "../hooks/useFetchData";

const ApiData = () => {
  const api = "https://api.github.com/users";
  const { loading, error, data } = useFetchData(api);
  return (
    <>
      <h1 style={{ textAlign: "center", borderBottom: "2px solid red" }}>
        Github Users
      </h1>
      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong...</h2>}
        {data?.map((item) => (
          <div key={item.id}>
            <img src={item.avatar_url} alt="images" width="250px" />
            <h1>{item.login}</h1>
            <h5>{item.html_url}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApiData;
