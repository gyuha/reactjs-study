"use client";
import { useEffect, useState } from "react";
import Results from "@/components/results";

const Home = ({ searchParams }) => {
  const API_KEY = "이건 키로 대체";

  const genre = searchParams.genre || "fetchTrending";
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`
    ).then((response) => response.json()
    ).then((data) => {
      console.log('📢[page.jsx:18]: data: ', data);
      if (data.status_code !== 7) {
        setResults(data.results)
      }
    });
  }, []);

  return <Results data={results}/>;
};

export default Home;
