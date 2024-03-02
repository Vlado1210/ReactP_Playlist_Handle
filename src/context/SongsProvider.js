import React from 'react'
import { createContext, useState } from 'react'


export const songsContext = createContext();

const SongsProvider = ({children}) => {

    const [chosenSongs, setChosenSongs] = useState([])

    const addSong = (song) => {
        setChosenSongs([...chosenSongs, song ])
    }

    const deleteSong = (songName) =>{
      const newList = chosenSongs.filter((song)=> song.name !== songName.name)
      setChosenSongs(newList)
    }

    const contextValue = {addSong, chosenSongs, deleteSong}

  return (
    <songsContext.Provider value={contextValue}>
        {children}
    </songsContext.Provider>
  )
}

export default SongsProvider