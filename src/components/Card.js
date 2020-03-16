/** @jsx jsx */
import {jsx, css} from '@emotion/core';
// this component will eventually receive some props for UI
function Card({username, avatar}) {
  return (
    <div
      css={css`
        font-size: 1.1rem;
        width: 100%;
        color: #f2f2f2;

        .channel-link a {
          text-decoration: none;
          color: inherit;
          margin-bottom: 5px;
          display: block;
        }
      `}
    >
      <h3 className="channel-link">
        <a href={`https://twitch.tv/${username}`}>{username}</a>
      </h3>
      <div>
        <img
          css={css`
            max-width: 85%;
            max-height: 85%;
            border-radius: 5px;
            object-fit: cover;
          `}
          src={avatar}
          alt={`Twitch avatar for ${username}`}
        />
      </div>
      <p>some text</p>
    </div>
  );
}

export default Card;
