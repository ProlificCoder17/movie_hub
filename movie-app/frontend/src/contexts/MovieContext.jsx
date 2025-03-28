import {createContext, useState, useEffect, useContext} from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = (children) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movie) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId) movie])
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieID)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        is
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}