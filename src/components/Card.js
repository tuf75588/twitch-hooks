/** @jsx jsx */
import {jsx, css} from '@emotion/core';
// this component will eventually receive some props for UI
function Card({username, avatar}) {
  return (
    <div
      css={css`
        color: blue;
        font-size: 1.1rem;
        width: 100%;
      `}
    >
      <h1>
        <a href={`https://twitch.tv/${username}`}>{username}</a>
      </h1>
      <div>
        <img
          src={avatar}
          alt={`Twitch avatar for ${username}`}
          style={{height: '150px'}}
        />
      </div>
    </div>
  );
}

export default Card;
