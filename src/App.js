import { useState, useEffect } from "react";

// https://api.github.com/users/nikolai-chernolutskii

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // set loading to true
    setLoading(true);
    // fetch the data from the API
    fetch(`https://api.github.com/users/nikolai-chernolutskii`)
      // convert the received response to JSON
      .then((response) => response.json())
      // populate the data object with the received response
      .then((data) => setData(data))
      // set loading to false, as it is done loading
      .then(() => setLoading(false))
      // handle errors - call the setError function
      .catch((error) => setError(error));
  },/* set the dependency array as empty so that the useEffect function runs only after the first render */[]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return (<div>No data available</div>);

  // This will be the default return value if the above conditions are not met
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img src={data.avatar_url} alt={data.login} />
    </div>
  );
}

export default App;
