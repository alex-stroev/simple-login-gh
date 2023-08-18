import React, { useState, useEffect } from "react";
import { Preloader, Button } from "../../ui";

const News = () => {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, []);

  ////////////////////////////////////////////

  const quantity = 8;
  const [step, setStep] = useState(1);

  return (
    <>
      <h1>Новости</h1>
      <div>
        {loading && <Preloader />}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ol>
          {data &&
            data.slice(0, quantity * step).map((item) => (
              <li key={item.id}>
                <p>
                  <b>{item.title}</b>
                  <br />
                  {item.body}
                </p>
              </li>
            ))}
        </ol>
        {data && quantity * step < data.length && (
          <Button onClick={() => setStep(step + 1)}>
            Показано {quantity * step}. Осталось показать{" "}
            {data.length - quantity * step}
          </Button>
        )}
      </div>
    </>
  );
};

export default News;
