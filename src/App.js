import React from "react";
import "./App.css";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data, isFetching } = useQuery("post", async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await res.json();
    console.log(result);
    console.log(data);
    
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center items-center text-4xl h-screen flex-col">
      <h2>Welcome to React query!!!!!!</h2>
{data.title}
    </div>
  );
}

export default App;
