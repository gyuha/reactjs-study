"use client";
import Results from "@/components/results";
import useSWR from 'swr';
import { API_KEY } from "./config";
import fetcher from "@/lib/fetcher";


const Home = ({ searchParams }) => {

  const genre = searchParams.genre || "fetchTrending";
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`
    , fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return <Results data={data.results} />;
};

export default Home;
