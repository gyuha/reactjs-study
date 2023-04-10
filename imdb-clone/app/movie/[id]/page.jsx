"use client";
import { useState } from "react";
import { API_KEY } from "@/app/config";
import fetcher from "@/lib/fetcher";
import useSWR from 'swr';
import Image from "next/image";

const Movie = ({ params }) => {
  const movieId = params.id;

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    , fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path
            }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {data.title || data.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {data.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {data.release_date || data.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Movie;