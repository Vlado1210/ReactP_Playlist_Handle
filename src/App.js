import './App.css';
import SongsList from './components/SongsList'
import ChosenPlaylist from './components/ChosenPlaylist'
import { useState } from 'react';
import SongsProvider from './context/SongsProvider';
import './styles/searchBar.css'

function App() {

  const [viewSearchedSongs,setViewedSearchedSongs] = useState(true);
  const [searchText,setSearchText] = useState('bad bunny');
  const [inputValue,setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchText(inputValue)
    setViewedSearchedSongs(true)
  }

  const handleClick = () => {
    setViewedSearchedSongs(false)
  }
  return (
    <SongsProvider>
    <div className="App">
      <div className='searchBar'>
      <form onSubmit={ handleSubmit}>
        <input type='text' name='searchText' placeholder='Your favorite songs?' onChange={(e) => {setInputValue(e.target.value)}}></input>
        <button type='submit'>Search</button>
      </form>
      <button onClick={handleClick}>View My Playlist</button>
      </div>
      <div>
        {
          viewSearchedSongs === true ? <SongsList searchText={searchText}/> : <ChosenPlaylist/>
        }
      </div>
    </div>
    </SongsProvider>
  );
}

export default App;
