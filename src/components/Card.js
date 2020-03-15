/** @jsx jsx */
import {jsx, css} from '@emotion/core';
// this component will eventually receive some props for UI
function Card({username}) {
  return (
    <div
      css={css`
        color: blue;
        font-size: 1.1rem;
        width: 100%;
      `}
    >
      <h1>{username}</h1>
      <div>
        <p>more meta information will go here</p>
        <p>like the stream link</p>
        <p>maybe a user avatar</p>
        <p>definitely an indicator if they are live or not</p>
      </div>
    </div>
  );
}

export default Card;
