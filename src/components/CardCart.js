import React from 'react'
import { useContext } from 'react'
import { songsContext } from '../context/SongsProvider'
import '../styles/cardCart.css'

const CardCart = ({ name,artist,album,albumImg }) => {

    const {addSong, deleteSong} = useContext(songsContext)
    const handleAddSongHype = () => {
        addSong({name: name, artist: artist, album: album, albumImg: albumImg, mood: 'hype'});
      };
    const handleAddSongChill = () => {
        addSong({name: name, artist: artist, album: album, albumImg: albumImg, mood: 'chill'});
      };
    const handleAddSongSad = () => {
        addSong({name: name, artist: artist, album: album, albumImg: albumImg, mood: 'sad'});
      };
    const handleAddSongParty = () => {
        addSong({name: name, artist: artist, album: album, albumImg: albumImg, mood: 'party'});
      };
    const handleDeleteSong = () =>{
        deleteSong({name: name, artist: artist, album: album, albumImg: albumImg, mood: 'chill'})
    }
  return (
    <div className='searchCard'>
      <div>
      <img src={albumImg} alt='portada'/>
      </div>
      <div>
        <h1>
           {name} 
        </h1>
        <h3>{artist}</h3>
        <p>{album}</p>
        <button className='hype' onClick={handleAddSongHype}>Hype</button>
        <button className='sad' onClick={handleAddSongSad}>Sad</button>
        <button className='party' onClick={handleAddSongParty}>Party</button>
        <button className='chill' onClick={handleAddSongChill}>Chill</button>
        <button className='Delete' onClick={handleDeleteSong}>Delete</button>
      </div>
    </div>
  )
}

export default CardCart