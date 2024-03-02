import React, { useEffect, useState } from 'react'
import CardCart from './CardCart'

const SongsList = ({ searchText }) => {

  const url =  `https://spotify81.p.rapidapi.com/search?q=${searchText}&type=tracks&limit=19&numberOfTopResults=5 ` ;

  const[songsLista, setSongsLista] = useState([]);

  const loadInitialSongs = () => {
    fetch(url).then( response => {
      return response.json()
    }).then(res => {
      setSongsLista(res);
      console.log(res)
  
    })
    .catch((error) => {
      console.error("error al cargar data:",error);
    })
  }

  useEffect(()=>{
    loadInitialSongs()
  },[songsLista])


  if ( songsLista.length === 0) {
    // Si searchTeam.data no está definido aún, puedes renderizar un mensaje de carga o hacer algo más
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {songsLista.tracks.map((song)=>{
        return(
          <CardCart name={song.data.name}
           artist={song.data.artists.items.map((artist)=>{return(artist.profile.name)})}
           album={song.data.albumOfTrack.name}
           albumImg={song.data.albumOfTrack.coverArt.sources[0].url} />
        )
      })}
    </div>
  )
}

export default SongsList