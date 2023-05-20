import React from 'react'

const card = ({...item}) => {
    const {title,duration,playback_count,user,artworkUrl}=item;
    const {username}=user;
  return (
                <article className="albums">
                    <div className="images">
                        <img src={artworkUrl} alt="image"></img>
                    </div>
                    <div className="content">
                      <h4 className="artist">{username}</h4>
                      <h4 className="artist-song">{title}</h4>
                      <div className="numbers">
                        <p>{duration}</p>
                        <p>{playback_count}</p>
                      </div>
                    </div>
                </article>
  )
}

export default card