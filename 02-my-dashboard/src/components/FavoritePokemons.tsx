"use client";
import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

import React, { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);

  const [pokemons] = useState(Object.values(favoritePokemons));

  // useEffect(() => {
  //   setFavoritePokemons
  // }, [favoritePokemons])

  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavorite = () => {
  return (
    <div className="flex flex-col h-[50vh]  items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-xl font-bold">No hay favoritos</span>
    </div>
  );
};
