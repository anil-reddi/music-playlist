import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlaylistItem = props => {
  const {playlistDetails, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = playlistDetails

  const onClickDeleteSong = () => {
    onDeleteSong(id)
  }

  return (
    <li className="playlist-item">
      <div className="track-container">
        <img src={imageUrl} alt="tracks" className="track-img" />
        <div className="name-genre-container">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-btn-container">
        <p className="song-duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickDeleteSong}
        >
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}
export default PlaylistItem
