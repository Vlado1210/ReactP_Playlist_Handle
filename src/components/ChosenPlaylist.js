import React from 'react'
import { useContext } from 'react'
import { songsContext } from '../context/SongsProvider'
import '../styles/chosenPlaylist.css'

const ChosenPlaylist = () => {
  const {chosenSongs} = useContext(songsContext)
  return (
    <div>
      <div className='liked'>
      <h2 className='text-bold'>Your Liked songs:</h2>
      <div className='scrollable-list'>
        <ul>
        {chosenSongs.map((song) => {
      return(
        <p>{song.name}</p>
      )
    })}
        </ul>
      </div>
    </div>

    <div className='grid-container'>
    <div className="card hype">
      <h2 className="text-bold">Hype</h2>
      <div className="scrollable-list">
       <ul>
         {chosenSongs.filter((hypeSong)=>hypeSong.mood === 'hype').map((song)=> {
          return(<li>{song.name}</li>)
         })}
       </ul>
      </div>
    </div>

    <div className="card party">
      <h2 className="text-bold">Party</h2>
      <div className="scrollable-list">
       <ul>
         {chosenSongs.filter((partySong)=>partySong.mood === 'party').map((song)=> {
          return(<li>{song.name}</li>)
         })}
       </ul>
      </div>
    </div>

    <div className="card chill">
      <h2 className="text-bold">Chill</h2>
      <div className="scrollable-list">
       <ul>
         {chosenSongs.filter((chillSong)=>chillSong.mood === 'chill').map((song)=> {
          return(<li>{song.name}</li>)
         })}
       </ul>
      </div>
    </div>

    <div className="card sad">
      <h2 className="text-bold">Sad</h2>
      <div className="scrollable-list">
       <ul>
         {chosenSongs.filter((sadSong)=>sadSong.mood === 'sad').map((song)=> {
          return(<li>{song.name}</li>)
         })}
       </ul>
      </div>
    </div>
    </div>

    </div>
  )
}

export default ChosenPlaylist